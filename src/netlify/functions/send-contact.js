const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  const { nome, numero, procedimento, mensagem } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: 'Nova Mensagem do Formulário de Contato',
    text: `
      Nome: ${nome}
      Número: ${numero}
      Procedimento: ${procedimento}
      Mensagem: ${mensagem}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: 'Mensagem enviada com sucesso!',
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `Erro ao enviar e-mail: ${error.message}`,
    };
  }
};
