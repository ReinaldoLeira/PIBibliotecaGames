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
-- Table structure for table `generos`
--

DROP TABLE IF EXISTS `generos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `generos` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nome_UNIQUE` (`nome`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `generos`
--

LOCK TABLES `generos` WRITE;
/*!40000 ALTER TABLE `generos` DISABLE KEYS */;
INSERT INTO `generos` VALUES (1,'Ação','2021-07-28 00:07:03','2021-07-28 00:07:03'),(2,'Aventura','2021-07-28 00:07:03','2021-07-28 00:07:03'),(3,'Arcade','2021-07-28 00:07:03','2021-07-28 00:07:03'),(4,'Plataforma','2021-07-28 00:07:03','2021-07-28 00:07:03'),(5,'Luta','2021-07-28 00:07:03','2021-07-28 00:07:03'),(6,'FPS','2021-07-28 00:07:03','2021-07-28 00:07:03'),(7,'RPG','2021-07-28 00:07:03','2021-07-28 00:07:03'),(8,'MMORPG','2021-07-28 00:07:03','2021-07-28 00:07:03'),(9,'Sobrevivência','2021-07-28 00:07:03','2021-07-28 00:07:03'),(10,'Terror','2021-07-28 00:07:03','2021-07-28 00:07:03'),(11,'Simulação','2021-07-28 00:07:03','2021-07-28 00:07:03'),(12,'Ritmo','2021-07-28 00:07:03','2021-07-28 00:07:03'),(13,'Esporte','2021-07-28 00:07:03','2021-07-28 00:07:03'),(14,'Quebra-cabeça','2021-07-28 00:07:03','2021-07-28 00:07:03'),(15,'Estratégia','2021-07-28 00:07:03','2021-07-28 00:07:03'),(16,'Corrida','2021-07-28 00:07:03','2021-07-28 00:07:03'),(17,'Outros','2021-07-28 00:07:03','2021-07-28 00:07:03');
/*!40000 ALTER TABLE `generos` ENABLE KEYS */;
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