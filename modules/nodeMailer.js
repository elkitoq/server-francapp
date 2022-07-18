const nodemailer = require("nodemailer");

/**
 * It sends an email to the user with the information of the device that he/she has sent to the
 * company.
 * </code>
 * @param emailBody - {
 */
 
    const createTransporteer = (user)=>{
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: user.config.email, // generated ethereal user
                pass: user.config.password, // generated ethereal password
            },
        });

        return transporter;
    }

    const sendEmail = (emailBody,user,transporter)=>{
        transporter.sendMail({
            from: `"Cosmica" ${user.config.email}`,
            to: `${emailBody.email}`,
            subject: 'Informacion de Recepción',
            html: `
            <p style="font-size:25px">Información de la recepción de su equipo</p>
            <ul style="font-size:17px">
                <li style="font-size:17px"> <b>ID:  </b> ${emailBody.id}</li>
                <li style="font-size:17px"><b>Nombre:</b> ${emailBody.name}</li>
                <li style="font-size:17px"><b>Equipo:</b> ${emailBody.device}</li>
                <li style="font-size:17px"><b>Estado:</b> ${emailBody.state === '1' ? 'En Progreso' : 'En Progreso'}</li>
                <li style="font-size:17px"><b>Fecha aproximada de entrega:</b> ${emailBody.deliveryDate}</li>
            </ul>`
        })
    }

module.exports = { sendEmail, createTransporteer };