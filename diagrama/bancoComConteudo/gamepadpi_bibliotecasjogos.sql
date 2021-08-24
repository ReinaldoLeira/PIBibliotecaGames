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
-- Table structure for table `bibliotecasjogos`
--

DROP TABLE IF EXISTS `bibliotecasjogos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bibliotecasjogos` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `plataforma` varchar(50) NOT NULL,
  `idJogos` bigint NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idBibliotecas` bigint NOT NULL,
  `obtido` enum('SIM','DESEJO') NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_bibliotecasJogos_jogos1_idx` (`idJogos`),
  KEY `fk_bibliotecasJogos_bibliotecas1_idx` (`idBibliotecas`),
  CONSTRAINT `fk_bibliotecasJogos_bibliotecas1` FOREIGN KEY (`idBibliotecas`) REFERENCES `bibliotecas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_bibliotecasJogos_jogos1` FOREIGN KEY (`idJogos`) REFERENCES `jogos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bibliotecasjogos`
--

LOCK TABLES `bibliotecasjogos` WRITE;
/*!40000 ALTER TABLE `bibliotecasjogos` DISABLE KEYS */;
INSERT INTO `bibliotecasjogos` VALUES (1,'PC',3,'2021-08-20 12:37:18','2021-08-20 12:37:18',1,'SIM'),(3,'PC',2,'2021-08-20 12:40:10','2021-08-20 12:40:10',1,'SIM'),(4,'PC',3,'2021-08-20 12:40:27','2021-08-20 12:40:27',1,'DESEJO'),(29,'PC',3,'2021-08-20 21:07:22','2021-08-20 21:07:22',1,'SIM'),(30,'PC',5,'2021-08-20 21:07:48','2021-08-20 21:07:48',1,'SIM'),(32,'Nintendo Wii/Wii U',4,'2021-08-20 21:22:16','2021-08-20 21:22:16',1,'SIM'),(34,'PlayStation 3',38,'2021-08-22 10:33:16','2021-08-22 10:33:16',1,'DESEJO'),(35,'PC',2,'2021-08-22 12:47:58','2021-08-22 12:47:58',5,'DESEJO'),(36,'PC',2,'2021-08-22 17:02:14','2021-08-22 17:02:14',6,'SIM'),(44,'PC',7,'2021-08-22 17:16:43','2021-08-22 17:16:43',6,'DESEJO'),(45,'PC',13,'2021-08-22 17:17:05','2021-08-22 17:17:05',6,'SIM'),(46,'PC',8,'2021-08-22 17:17:44','2021-08-22 17:17:44',1,'DESEJO');
/*!40000 ALTER TABLE `bibliotecasjogos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-23 11:03:57
