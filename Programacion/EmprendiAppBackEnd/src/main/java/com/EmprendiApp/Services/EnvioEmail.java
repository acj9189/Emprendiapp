package com.EmprendiApp.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EnvioEmail {
	
	 @Autowired
	 private JavaMailSender mailSender;
	 
	 public boolean sendEmail(String destinatario, String contenidoTitulo, String contenido) {
		 	boolean response = false;
	        SimpleMailMessage email = new SimpleMailMessage();
	        email.setTo(destinatario);
	        email.setSubject(contenidoTitulo);
	        email.setText(contenido);
	        response = true;
	        return response;
	    }

}
