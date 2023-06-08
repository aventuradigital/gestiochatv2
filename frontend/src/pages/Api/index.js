import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(2),
    },

    paper: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2),
        display: "flex",
        alignItems: "center",
        marginBottom: 12,
    },

    settingOption: {
        marginLeft: "auto",
    },

    margin: {
        margin: theme.spacing(1),
    },

    color: {
        color: theme.palette.secondary.main,
    },

    text: {
        marginLeft: "42px",
        color: theme.palette.text.secondary,
    },

    textP: {
        marginLeft: "42px",
        color: theme.palette.text.secondary,
    },

}));

const Api = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <h2>Documentación para el envío de mensajes.</h2>

                <h2 className={classes.color}>Métodos de Envio</h2>

                <p className={classes.text}>1. Mensajes de Texto</p>
                <p className={classes.text}>2. Mensajes de Medios</p>

                <h2 className={classes.color}>Instrucciones</h2>
                <p><b>Notas importantes</b></p>
                <ul>
                    <li className={classes.text}>Para obtener el token API, vaya a la configuración y su token estará allí, sin él no será posible enviar mensajes.</li>
                    <li className={classes.text}>El número de envío no debe tener máscara ni caracteres especiales y debe constar de:</li>
                    <br />
                    <ol>
                        <ul>
                            <li className={classes.text}>Código de pais - Ejmp: 51 (Perú)</li>
                            <li className={classes.text}>DD</li>
                            <li className={classes.text}>Número</li>
                        </ul>
                    </ol>
                </ul>
                <h2 className={classes.color}>1. Mensajes de Texto</h2>
                <p>A continuación se muestra una lista de la información necesaria para enviar mensajes de texto:</p>
                <p className={classes.textP}><b>URL: </b>{process.env.REACT_APP_BACKEND_URL}/api/messages/send</p>
                <p className={classes.textP}><b>Metódo: </b>POST</p>
                <p className={classes.textP}><b>Headers: </b>Authorization: Bearer (token) e Content-Type application/json</p>
                <p className={classes.textP}><b>Body: </b>"number": "51925465788", "body": "Enviado via api"</p>

                <h2 className={classes.color}>2. Mensajes de medios</h2>
                <p>A continuación se muestra una lista de la información necesaria para enviar medios:</p>
                <p className={classes.textP}><b>URL: </b>{process.env.REACT_APP_BACKEND_URL}/api/messages/send</p>
                <p className={classes.textP}><b>Metódo: </b>POST</p>
                <p className={classes.textP}><b>Headers: </b>Authorization: Bearer (token) e Content-Type multipart/form-data</p>
                <p className={classes.textP}><b>Body: </b>"number": "51925465788", "medias": "aquí van tus medios", "body": "Enviado via api"</p>
            </Container>
        </div>
    );
};

export default Api;