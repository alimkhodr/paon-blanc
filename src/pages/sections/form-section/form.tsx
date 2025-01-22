import React, { useState, useRef } from "react";
import { Container, TextField, MenuItem, Select, InputLabel, FormControl, styled, Typography, Snackbar, Alert } from "@mui/material";
import StyledButtonGreen from "../../../components/StyledButton/styled-button-green";
import theme from "../../../theme";
import services from "../../sections/service-section/services-data";
import CircularProgress from '@mui/material/CircularProgress';

const Form = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [severity, setSeverity] = useState<"success" | "error">("success");
    const telefoneRef = useRef<HTMLInputElement>(null);

    const StyledForm = styled("div")(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        padding: "40px 0px",
        backgroundColor: theme.palette.background.paper,
    }));

    const StyledCard = styled("div")(() => ({
        borderRadius: 5,
        border: "none",
        padding: 25,
        backgroundColor: theme.palette.background.default,
        alignItems: "center",
        margin: "20px 0",
        width: "80%",
    }));

    const procedimentos = services.flatMap((service) =>
        service.items.map((item) => `${service.category} - ${item.text}`)
    );

    const handleSubmit = async (event: React.FormEvent) => {
        if (telefoneRef.current && telefoneRef.current.value.length < 14) {
            setMessage("Telefone inválido. Por favor, insira um telefone válido.");
            setSeverity("error");
            setOpenSnackbar(true);
            setLoading(false);
            return;
        }

        event.preventDefault();
        setLoading(true);

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xqaarvay", {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json",
                },
            });

            if (response.ok) {
                setMessage("Mensagem enviada com sucesso!");
                setSeverity("success");
            } else {
                setMessage("Erro ao enviar a mensagem. Tente novamente.");
                setSeverity("error");
            }

            setOpenSnackbar(true);
        } catch (error) {
            setMessage("Erro ao enviar a mensagem. Tente novamente.");
            setSeverity("error");
            setOpenSnackbar(true);
        }
        setLoading(false);
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const handleTelefoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replace(/\D/g, "");
        let formattedValue = value;

        if (value.length == 0) {
            formattedValue = '';
        } else if (value.length <= 2 && value.length > 0) {
            formattedValue = `(${value}`;
        } else if (value.length <= 6) {
            formattedValue = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        } else {
            formattedValue = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
        }

        if (telefoneRef.current && telefoneRef.current.value !== formattedValue) {
            telefoneRef.current.value = formattedValue;
        }
    };

    return (
        <StyledForm>
            <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant="h3" textAlign="center" fontWeight="bold">
                    Entre em contato
                </Typography>
                <Typography variant="body1" textAlign="center">
                    Preencha o Formulário
                </Typography>
                <StyledCard>
                    <form
                        name="contact-form"
                        onSubmit={handleSubmit}
                        style={{ display: "flex", gap: 15, flexDirection: "column" }}
                    >
                        <TextField
                            label="Nome"
                            variant="outlined"
                            fullWidth
                            name="Nome"
                            required
                        />
                        <TextField
                            label="Telefone"
                            variant="outlined"
                            fullWidth
                            name="Telefone"
                            inputRef={telefoneRef}
                            onChange={handleTelefoneChange}
                            required
                        />
                        <FormControl fullWidth>
                            <InputLabel id="procedimento-label">Procedimento</InputLabel>
                            <Select labelId="procedimento-label" label="Procedimento de Interesse" name="Procedimento">
                                {procedimentos.map((procedimento, index) => (
                                    <MenuItem key={index} value={procedimento}>
                                        {procedimento}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField
                            label="Mensagem"
                            variant="outlined"
                            fullWidth
                            name="Mensagem"
                            multiline
                            rows={4}
                        />
                        <StyledButtonGreen
                            variant="contained"
                            color="primary"
                            type="submit"
                            fullWidth
                            endIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
                            disabled={loading}
                        >
                            Enviar
                        </StyledButtonGreen>
                    </form>
                </StyledCard>
            </Container>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={4000} 
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert onClose={handleCloseSnackbar} severity={severity} sx={{ width: "100%" }}>
                    {message}
                </Alert>
            </Snackbar>
        </StyledForm>
    );
};

export default Form;
