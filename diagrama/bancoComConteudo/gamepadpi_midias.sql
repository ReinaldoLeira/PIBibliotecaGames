-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: gamepadpi
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `midias`
--

DROP TABLE IF EXISTS `midias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `midias` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `tipo` enum('IMAGEM','VIDEO') NOT NULL,
  `path` varchar(500) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idPerfis` bigint NOT NULL,
  `idJogos` bigint NOT NULL,
  `titulo` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_midias_perfis1_idx` (`idPerfis`),
  KEY `fk_midias_jogos1_idx` (`idJogos`),
  CONSTRAINT `fk_midias_jogos1` FOREIGN KEY (`idJogos`) REFERENCES `jogos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_midias_perfis1` FOREIGN KEY (`idPerfis`) REFERENCES `perfis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `midias`
--

LOCK TABLES `midias` WRITE;
/*!40000 ALTER TABLE `midias` DISABLE KEYS */;
INSERT INTO `midias` VALUES (3,'IMAGEM','https://conteudo.imguol.com.br/c/entretenimento/4d/2021/07/19/the-legend-of-zelda-1626716260241_v2_600x1.png','2021-08-19 14:58:33','2021-08-19 14:58:33',1,4,'a'),(4,'VIDEO','Cl6Bc7nZps4','2021-08-19 15:13:05','2021-08-19 15:13:05',1,4,'zelda'),(5,'VIDEO','Pi-MRZBP91I','2021-08-21 21:27:44','2021-08-21 21:27:44',1,4,'Trailer Zelda'),(6,'IMAGEM','https://uploads.jovemnerd.com.br/wp-content/uploads/2021/07/jogador-descobre-como-pegar-a-master-sword-com-tres-coracoes-em-zelda-breath-of-the-wild.jpg','2021-08-21 21:30:12','2021-08-21 21:30:12',1,4,'Walpaper'),(7,'VIDEO','o1780AqAa20','2021-08-21 21:31:45','2021-08-21 21:31:45',1,12,'Trailer DarkSouls'),(8,'IMAGEM','https://i2.wp.com/manualdosgames.com/wp-content/uploads/2018/03/H2x1_NSwitch_DarkSoulsRemastered_image1600w-1170x780.jpg','2021-08-21 21:34:27','2021-08-21 21:34:27',1,12,'DarkSOuls');
/*!40000 ALTER TABLE `midias` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-23 11:03:58
