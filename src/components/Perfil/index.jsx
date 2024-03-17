import styles from './Perfil.module.css'


const Perfil = ({ nomeUsuario }) => {
    //const usuario = {
    //    nome: 'Rodrigo Onishi',
    //    avatar: 'https://github.com/onishi03.png'
    //}

    //const { endereco, nome } = props;

    return (
        <header classeName={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={styles.name}>{nomeUsuario}</h1>
        </header>
    )
}

export default Perfil;