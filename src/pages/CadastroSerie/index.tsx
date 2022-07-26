import { Sidebar } from "../../components/Sidebar";
import { Box, Container } from "./style";
import "../../components/Sidebar/style";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { Serie } from "../../interfaces";
import { auth, db, storage } from "../../services/firebaseConnection";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { User } from "firebase/auth";
import { Header } from "../../components/Header";

export function CadastroSerie() {
    useState<{ nome?: string, descricao?: string }>({
        nome: '',
        descricao: '',
    });
    const [serie, setSerie] = useState<Serie>({
        nome: '',
        descricao: ''
    });

    const [user, setUser] = useState<User | null>()

    useEffect(() => {
        setUser(auth.currentUser);
    }, []);

    const serieCollectionRef = collection(db, "series");

    function incluirSerie() {


        const file = serie.imagem;
        if (!file || !user?.uid) return;

        const storageRef = ref(storage, `imagens/${auth.currentUser?.uid}/${file.name}`);
        console.log(storageRef)
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
                    addDoc(serieCollectionRef, { nome: serie.nome, descricao: serie.descricao, imagemURL: url })
                        .then() // create
                        .catch(
                            // deletar a imagem
                        )

                })
            }
            
        )        
        // navigate('/catalogo', { replace: true })
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
                        {/* <button className="voltar" type="button" onClick={() => voltar()} ><img src={volta} alt="voltar" /></button> */}
                        <h1>Cadastre aqui sua nova série:</h1>

                        <span className="nome">Nome da série</span>
                        {/* <input type="text" placeholder='Digite o nome da série aqui...' value={nome} onChange={event => setNome(event.target.value)} /> */}
                        <input placeholder='Digite o nome da série aqui...' value={serie.nome} onChange={event => setSerie({ ...serie, nome: event.target.value })} />

                        <span className="descricao">Descrição da série</span>
                        {/* <input type="text" className="descricao" placeholder='Digite a descrição da série aqui...' value={descricao} onChange={event => setDescricao(event.target.value)} /> */}
                        <input className="descricao" placeholder='Digite a descrição da série aqui...' value={serie.descricao} onChange={event => setSerie({ ...serie, descricao: event.target.value })} />

                        <span className="file">Escolher imagem da série</span>
                        <input className="file" type="file" onChange={event => {
                            if (event.target && event.target.files?.length)
                                setSerie({ ...serie, imagem: event.target.files[0] })
                        }
                        } />

                        {!imagemURL && <progress value={carregandoImagem} max="100"></progress>}
                        {/* {imagemURL && <img src={imagemURL} alt="Imagem"/>} pra mostrar a imagem na tela  */}

                        <button type='submit' onClick={() => incluirSerie()}>Incluir série</button>

                    </div>
                </form>
            </Container>

        </Box>
    )
}