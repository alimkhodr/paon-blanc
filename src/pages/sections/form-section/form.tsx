import { Container, TextField, MenuItem, Select, InputLabel, FormControl, styled, Typography } from '@mui/material';
import StyledButtonGreen from '../../../components/StyledButton/StyledButtonGreen';
import theme from '../../../theme';
import services from '../../sections/service-section/services-data';

const Form = () => {
    const StyledForm = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: '40px 0px',
        backgroundColor: theme.palette.background.paper,
    }));

    const StyledCard = styled('div')(() => ({
        borderRadius: 5,
        border: 'none',
        padding: 25,
        backgroundColor: theme.palette.background.default,
        alignItems: 'center',
        margin: "20px 0",
        width: '80%',
    }));

    const procedimentos = services.flatMap(service =>
        service.items.map(item => `${service.category} - ${item.text}`)
    );

    return (
        <StyledForm>
            <Container
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
                <Typography
                    variant="h3"
                    textAlign="center"
                    fontWeight="bold"
                >
                    Entre em contato
                </Typography>
                <Typography
                    variant="body1"
                    textAlign="center"
                >
                    Preencha o Formulário
                </Typography>
                <StyledCard>
                    <form
                        name="contact"
                        method="POST"
                        data-netlify="true" 
                        style={{ display: "flex", gap: 15, flexDirection: "column" }}
                    >
                        <input type="hidden" name="form-name" value="contact" />

                        <TextField
                            label="Nome"
                            variant="outlined"
                            fullWidth
                            name="nome"
                            margin="none"
                            required
                        />
                        <TextField
                            label="Número"
                            variant="outlined"
                            fullWidth
                            name="numero"
                            margin="none"
                            type="number"
                            required
                        />
                        <FormControl fullWidth margin="none">
                            <InputLabel id="procedimento-label">Procedimento de Interesse</InputLabel>
                            <Select
                                labelId="procedimento-label"
                                label="Procedimento de Interesse"
                                name="procedimento"
                                required
                            >
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
                            margin="none"
                            multiline
                            rows={4}
                        />
                        <StyledButtonGreen variant="contained" color="primary" type="submit" fullWidth>
                            Enviar
                        </StyledButtonGreen>
                    </form>
                </StyledCard>
            </Container>
        </StyledForm>
    );
};

export default Form;
