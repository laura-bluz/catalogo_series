/* eslint-disable react-hooks/exhaustive-deps */
import { Sidebar } from "../../components/Sidebar";
import { Box, Container } from "./style";
import "../../components/Sidebar/style";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Serie } from "../../interfaces";
import { auth, db, storage } from "../../services/firebaseConnection";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { User } from "firebase/auth";
import { Header } from "../../components/Header";

export function CadastroSerie() {
    const [serie, setSerie] = useState<Serie>({
        nome: '',
        descricao: '',
        nota: 1
    });

    const [user, setUser] = useState<User | null>()

    useEffect(() => {
        setUser(auth.currentUser);
    }, []);


    async function saveNewSerie(url: string) {
        if (auth.currentUser?.uid) {
            const docUser = doc(db, 'users', auth.currentUser.uid)
            const docSnap = await getDoc(docUser)
            // console.log('docuser', docSnap);
            const data = docSnap.exists() ? docSnap.data() : null
            // console.log('data', data)
            const updateRef = doc(db, 'users', auth.currentUser.uid);
            const aux = data?.serie;
            var array = aux.concat([{ nome: serie.nome, descricao: serie.descricao, nota: serie.nota, imagemURL: url }]);

            updateDoc(updateRef, {
                serie: array
            }).then(response => {
                alert("updated")
                navigate('/catalogo', { replace: true })
            }).catch(error => {
                console.log(error.message)
            })
            
        }
       
            
        
    }

    function incluirSerie() {

        const user = auth.currentUser;
        const file = serie.imagem;
        if (!file || !user?.uid) return;

        const storageRef = ref(storage, `imagens/${auth.currentUser?.uid}/${file.name}`);
        // console.log("storageref", storageRef)
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            snapshot => {
                const carregandoImagem = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setCarregandoImagem(carregandoImagem);
            },
            error => {
                alert("Deu erro!");
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(url => {
                    setImagemURL(url);
                    saveNewSerie(url);                   
                })
            }

        )
    }

    let navigate = useNavigate();

    const [imagemURL, setImagemURL] = useState("");
    const [carregandoImagem, setCarregandoImagem] = useState(0);
    
    function handleCadastroSerie(event: FormEvent) {
        event.preventDefault();
    }

    return (
        <Box>
            <Sidebar />
            <Container>
                <Header />
                <form className="form-cadastroSerie" onSubmit={handleCadastroSerie}>
                    <div>
                        <h1>Cadastre aqui sua nova série:</h1>

                        <span className="nome">Nome da série</span>
                        <input type="text" placeholder='Digite o nome da série aqui...' value={serie.nome} onChange={event => setSerie({ ...serie, nome: event.target.value })} />

                        <span className="descricao">Review da série</span>
                        <input type="textarea" className="descricao" placeholder='Digite sua review da série aqui...' value={serie.descricao} onChange={event => setSerie({ ...serie, descricao: event.target.value })} />
                        <p className="caracteres">Review = o que você achou da série</p>
                        
                        <span className="nota">Nota da série</span>
                        <input className="nota" type="number" min="1" max="10" value={serie.nota} onChange={event => setSerie({ ...serie, nota: parseInt(event.target.value) })} />
                        
                        <span className="file">Escolher imagem da série</span>
                        <input className="file" type="file" onChange={event => {
                            if (event.target && event.target.files?.length)
                                setSerie({ ...serie, imagem: event.target.files[0] })
                        }
                        } />

                        {!imagemURL && <progress value={carregandoImagem} max="100"></progress>}

                        <button type='submit' onClick={() => incluirSerie()}>Incluir série</button>

                    </div>
                </form>
            </Container>

        </Box>
    )
}