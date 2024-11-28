CREATE TABLE `gestaoMedicamentosDB`.`usuarios` 
(`id` INT NOT NULL AUTO_INCREMENT , `nome` VARCHAR(50) NOT NULL , `email` VARCHAR(50) 
NOT NULL , `senha` VARCHAR(50) NOT NULL , PRIMARY KEY (`id`), UNIQUE `email-unique` (`email`)) 
ENGINE = InnoDB;

CREATE TABLE `gestaoMedicamentosDB`.`medicamentos` (`id` INT NOT NULL AUTO_INCREMENT ,
 `usuario_id` INT NOT NULL , `nome` VARCHAR(50) NOT NULL , `dosagem` DECIMAL NOT NULL , 
 `unidade_medida` VARCHAR(10) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

ALTER TABLE `medicamentos`
  ADD CONSTRAINT `fkt_to_usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);


CREATE TABLE `gestaoMedicamentosDB`.`lembretes` (`id` INT NOT NULL AUTO_INCREMENT , 
`medicamento_id` INT NOT NULL , `horario` TIME NOT NULL , `mensagem` VARCHAR(255) NOT NULL ,
 PRIMARY KEY (`id`)) ENGINE = InnoDB;

ALTER TABLE `lembretes`
  ADD CONSTRAINT `fk_to_medicamento_id` FOREIGN KEY (`medicamento_id`) REFERENCES `medicamentos` (`id`);

CREATE TABLE `gestaoMedicamentosDB`.`historicos` (`id` INT NOT NULL AUTO_INCREMENT ,
 `lembrete_id` INT NOT NULL , `data` DATETIME NOT NULL , `status` VARCHAR(20) NOT NULL ,
  PRIMARY KEY (`id`)) ENGINE = InnoDB;

ALTER TABLE `historicos`
  ADD CONSTRAINT `fk_to_lembrete_id` FOREIGN KEY (`lembrete_id`) REFERENCES `lembretes` (`id`);