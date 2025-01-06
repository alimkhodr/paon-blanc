import React, { useState } from "react";
import { Container, TextField, MenuItem, Select, InputLabel, FormControl, styled, Typography } from "@mui/material";
import StyledButtonGreen from "../../../components/StyledButton/StyledButtonGreen";
import theme from "../../../theme";
import services from "../../sections/service-section/services-data";

const Form = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

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
        event.preventDefault();
        setLoading(true);

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        const data = {
            nome: formData.get("nome"),
            numero: formData.get("numero"),
            procedimento: formData.get("procedimento"),
            mensagem: formData.get("mensagem"),
        };

        try {
            const response = await fetch("/.netlify/functions/send-contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.text();
            setMessage(result);
        } catch (error) {
            setMessage("Erro ao enviar a mensagem. Tente novamente.");
        } finally {
            setLoading(false);
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
                        method="POST"
                        data-netlify="true"
                        onSubmit={handleSubmit}
                        style={{ display: "flex", gap: 15, flexDirection: "column" }}
                    >
                        <TextField label="Nome" variant="outlined" fullWidth name="nome" required />
                        <TextField
                            label="Número"
                            variant="outlined"
                            fullWidth
                            name="numero"
                            type="number"
                            required
                        />
                        <FormControl fullWidth>
                            <InputLabel id="procedimento-label">Procedimento de Interesse</InputLabel>
                            <Select labelId="procedimento-label" label="Procedimento de Interesse" name="procedimento">
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
                            name="mensagem"
                            multiline
                            rows={4}
                        />
                        <StyledButtonGreen variant="contained" color="primary" type="submit" fullWidth>
                            {loading ? "Enviando..." : "Enviar"}
                        </StyledButtonGreen>
                    </form>
                    {message && <Typography variant="body2" color="error">{message}</Typography>}
                </StyledCard>
            </Container>
        </StyledForm>
    );
};

export default Form;
