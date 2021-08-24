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
-- Table structure for table `jogosplataformas`
--

DROP TABLE IF EXISTS `jogosplataformas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jogosplataformas` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idJogos` bigint NOT NULL,
  `idPlataformas` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_jogosPlataformas_jogos1_idx` (`idJogos`),
  KEY `fk_jogosPlataformas_plataformas1_idx` (`idPlataformas`),
  CONSTRAINT `fk_jogosPlataformas_jogos1` FOREIGN KEY (`idJogos`) REFERENCES `jogos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_jogosPlataformas_plataformas1` FOREIGN KEY (`idPlataformas`) REFERENCES `plataformas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jogosplataformas`
--

LOCK TABLES `jogosplataformas` WRITE;
/*!40000 ALTER TABLE `jogosplataformas` DISABLE KEYS */;
INSERT INTO `jogosplataformas` VALUES (3,'2021-07-28 00:07:03','2021-07-28 00:07:03',2,11),(4,'2021-07-28 00:07:03','2021-07-28 00:07:03',3,1),(5,'2021-07-28 00:07:03','2021-07-28 00:07:03',3,3),(6,'2021-07-28 00:07:03','2021-07-28 00:07:03',3,4),(7,'2021-07-28 00:07:03','2021-07-28 00:07:03',4,10),(8,'2021-07-28 00:07:03','2021-07-28 00:07:03',4,11),(9,'2021-07-28 00:07:03','2021-07-28 00:07:03',5,1),(10,'2021-07-28 00:07:03','2021-07-28 00:07:03',5,3),(11,'2021-07-28 00:07:03','2021-07-28 00:07:03',5,4),(12,'2021-07-28 00:07:03','2021-07-28 00:07:03',5,8),(13,'2021-07-28 00:07:03','2021-07-28 00:07:03',5,11),(14,'2021-08-21 15:38:06','2021-08-21 15:38:06',6,1),(15,'2021-08-21 15:38:06','2021-08-21 15:38:06',6,3),(16,'2021-08-21 15:38:06','2021-08-21 15:38:06',6,8),(17,'2021-08-21 15:40:22','2021-08-21 15:40:22',7,1),(18,'2021-08-21 15:40:22','2021-08-21 15:40:22',7,3),(19,'2021-08-21 15:40:23','2021-08-21 15:40:23',7,11),(20,'2021-08-21 15:43:33','2021-08-21 15:43:33',8,3),(21,'2021-08-21 15:43:34','2021-08-21 15:43:34',8,4),(22,'2021-08-21 15:45:06','2021-08-21 15:45:06',9,3),(23,'2021-08-21 15:45:06','2021-08-21 15:45:06',9,4),(24,'2021-08-21 15:46:49','2021-08-21 15:46:49',10,1),(25,'2021-08-21 15:46:49','2021-08-21 15:46:49',10,3),(26,'2021-08-21 15:46:49','2021-08-21 15:46:49',10,4),(27,'2021-08-21 15:46:49','2021-08-21 15:46:49',10,7),(28,'2021-08-21 15:46:49','2021-08-21 15:46:49',10,8),(29,'2021-08-21 15:46:50','2021-08-21 15:46:50',10,9),(30,'2021-08-21 15:48:47','2021-08-21 15:48:47',11,1),(31,'2021-08-21 15:48:47','2021-08-21 15:48:47',11,2),(32,'2021-08-21 15:48:47','2021-08-21 15:48:47',11,3),(33,'2021-08-21 15:48:47','2021-08-21 15:48:47',11,4),(34,'2021-08-21 15:48:48','2021-08-21 15:48:48',11,8),(35,'2021-08-21 15:48:48','2021-08-21 15:48:48',11,9),(36,'2021-08-21 15:48:48','2021-08-21 15:48:48',11,10),(37,'2021-08-21 15:48:48','2021-08-21 15:48:48',11,11),(38,'2021-08-21 15:48:48','2021-08-21 15:48:48',11,12),(39,'2021-08-21 15:53:41','2021-08-21 15:53:41',12,1),(40,'2021-08-21 15:53:41','2021-08-21 15:53:41',12,2),(41,'2021-08-21 15:53:41','2021-08-21 15:53:41',12,3),(42,'2021-08-21 15:53:41','2021-08-21 15:53:41',12,4),(43,'2021-08-21 15:53:41','2021-08-21 15:53:41',12,7),(44,'2021-08-21 15:53:41','2021-08-21 15:53:41',12,8),(45,'2021-08-21 15:58:48','2021-08-21 15:58:48',13,3),(46,'2021-08-21 15:58:48','2021-08-21 15:58:48',13,4),(47,'2021-08-21 16:00:27','2021-08-21 16:00:27',14,2),(48,'2021-08-21 16:00:27','2021-08-21 16:00:27',14,3),(49,'2021-08-21 16:02:51','2021-08-21 16:02:51',15,1),(50,'2021-08-21 16:02:51','2021-08-21 16:02:51',15,3),(51,'2021-08-21 16:02:51','2021-08-21 16:02:51',15,8),(52,'2021-08-21 16:02:51','2021-08-21 16:02:51',15,11),(53,'2021-08-21 16:04:27','2021-08-21 16:04:27',16,1),(54,'2021-08-21 16:04:27','2021-08-21 16:04:27',16,2),(55,'2021-08-21 16:04:27','2021-08-21 16:04:27',16,3),(56,'2021-08-21 16:04:27','2021-08-21 16:04:27',16,4),(57,'2021-08-21 16:04:27','2021-08-21 16:04:27',16,8),(58,'2021-08-21 16:06:30','2021-08-21 16:06:30',17,1),(59,'2021-08-21 16:06:30','2021-08-21 16:06:30',17,3),(60,'2021-08-21 16:06:30','2021-08-21 16:06:30',17,4),(61,'2021-08-21 16:06:30','2021-08-21 16:06:30',17,8),(62,'2021-08-21 16:06:31','2021-08-21 16:06:31',17,9),(63,'2021-08-21 16:12:30','2021-08-21 16:12:30',18,1),(64,'2021-08-21 16:12:30','2021-08-21 16:12:30',18,3),(65,'2021-08-21 16:12:30','2021-08-21 16:12:30',18,4),(66,'2021-08-21 16:12:30','2021-08-21 16:12:30',18,8),(67,'2021-08-21 16:12:30','2021-08-21 16:12:30',18,9),(68,'2021-08-21 16:21:54','2021-08-21 16:21:54',19,1),(69,'2021-08-21 16:21:54','2021-08-21 16:21:54',19,8),(70,'2021-08-21 16:21:55','2021-08-21 16:21:55',19,11),(71,'2021-08-21 16:28:29','2021-08-21 16:28:29',22,1),(72,'2021-08-21 16:28:29','2021-08-21 16:28:29',22,3),(73,'2021-08-21 16:28:29','2021-08-21 16:28:29',22,4),(74,'2021-08-21 16:28:29','2021-08-21 16:28:29',22,8),(75,'2021-08-21 16:28:29','2021-08-21 16:28:29',22,9),(76,'2021-08-21 16:31:41','2021-08-21 16:31:41',23,14),(77,'2021-08-21 16:33:16','2021-08-21 16:33:16',24,14),(78,'2021-08-21 16:35:35','2021-08-21 16:35:35',25,2),(79,'2021-08-21 16:35:35','2021-08-21 16:35:35',25,3),(80,'2021-08-21 16:37:03','2021-08-21 16:37:03',26,10),(81,'2021-08-21 16:38:55','2021-08-21 16:38:55',27,1),(82,'2021-08-21 16:38:55','2021-08-21 16:38:55',27,3),(83,'2021-08-21 16:38:55','2021-08-21 16:38:55',27,8),(84,'2021-08-21 16:40:28','2021-08-21 16:40:28',28,1),(85,'2021-08-21 16:40:28','2021-08-21 16:40:28',28,2),(86,'2021-08-21 16:40:28','2021-08-21 16:40:28',28,7),(87,'2021-08-21 16:43:07','2021-08-21 16:43:07',29,1),(88,'2021-08-21 16:44:58','2021-08-21 16:44:58',30,1),(89,'2021-08-21 16:44:58','2021-08-21 16:44:58',30,3),(90,'2021-08-21 16:44:58','2021-08-21 16:44:58',30,8),(91,'2021-08-21 16:44:58','2021-08-21 16:44:58',30,11),(92,'2021-08-21 16:46:59','2021-08-21 16:46:59',31,4),(93,'2021-08-21 16:49:37','2021-08-21 16:49:37',32,1),(94,'2021-08-21 16:49:38','2021-08-21 16:49:38',32,3),(95,'2021-08-21 16:49:38','2021-08-21 16:49:38',32,7),(96,'2021-08-21 16:49:38','2021-08-21 16:49:38',32,8),(97,'2021-08-21 16:51:26','2021-08-21 16:51:26',33,1),(98,'2021-08-21 16:54:33','2021-08-21 16:54:33',34,1),(99,'2021-08-21 16:54:33','2021-08-21 16:54:33',34,5),(100,'2021-08-21 16:54:33','2021-08-21 16:54:33',34,6),(101,'2021-08-21 16:54:33','2021-08-21 16:54:33',34,10),(102,'2021-08-21 16:54:34','2021-08-21 16:54:34',34,14),(103,'2021-08-21 16:56:14','2021-08-21 16:56:14',35,1),(104,'2021-08-21 16:56:14','2021-08-21 16:56:14',35,2),(105,'2021-08-21 16:56:14','2021-08-21 16:56:14',35,3),(106,'2021-08-21 16:56:14','2021-08-21 16:56:14',35,7),(107,'2021-08-21 16:56:14','2021-08-21 16:56:14',35,8),(108,'2021-08-21 16:59:11','2021-08-21 16:59:11',36,1),(109,'2021-08-21 16:59:12','2021-08-21 16:59:12',36,8),(110,'2021-08-21 16:59:12','2021-08-21 16:59:12',36,9),(111,'2021-08-21 20:39:17','2021-08-21 20:39:17',37,15),(112,'2021-08-21 20:41:11','2021-08-21 20:41:11',38,1),(113,'2021-08-21 20:41:11','2021-08-21 20:41:11',38,3),(114,'2021-08-21 20:41:11','2021-08-21 20:41:11',38,8);
/*!40000 ALTER TABLE `jogosplataformas` ENABLE KEYS */;
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