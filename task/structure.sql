CREATE DATABASE  IF NOT EXISTS `combotag` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `combotag`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.10    Database: combotag
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `KeywordLists`
--

DROP TABLE IF EXISTS `KeywordLists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `KeywordLists` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `keywords` json DEFAULT NULL,
  `number_of_keywords` int(11) DEFAULT NULL,
  `language` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_private` int(11) DEFAULT '0',
  `last_modified` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `origin_keywords` json DEFAULT NULL,
  `version` varchar(45) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `origin_version` varchar(45) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `last_modified` (`last_modified`)
) ENGINE=InnoDB AUTO_INCREMENT=1935 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Vasts`
--

DROP TABLE IF EXISTS `Vasts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Vasts` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `description` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `active` tinyint(1) DEFAULT '0',
  `continue_on_click` tinyint(1) DEFAULT '0',
  `language` varchar(3) COLLATE utf8_unicode_ci DEFAULT 'eng',
  `hide_timer` tinyint(1) DEFAULT '0',
  `timer_location` varchar(13) COLLATE utf8_unicode_ci DEFAULT 'bottom',
  `skip_button_location` varchar(13) COLLATE utf8_unicode_ci DEFAULT 'middle_right',
  `hide_all_ui` tinyint(1) DEFAULT '0',
  `hide_play_button` tinyint(1) DEFAULT '0',
  `hide_skip_button` tinyint(1) DEFAULT '0',
  `fraud` tinyint(1) DEFAULT '0',
  `brand_safety` tinyint(1) DEFAULT '0',
  `network_id` int(10) NOT NULL,
  `ad_tag_url` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `width` smallint(6) NOT NULL,
  `height` smallint(6) NOT NULL,
  `duration` smallint(6) NOT NULL,
  `whitelist_keywords` varchar(600) COLLATE utf8_unicode_ci DEFAULT NULL,
  `serve_on_unmeasurable` tinyint(1) NOT NULL DEFAULT '1',
  `is_branded` tinyint(1) DEFAULT '1',
  `private_brand_safety` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `Vasts_name_network_constraint` (`name`,`network_id`),
  KEY `Vasts_Networks_fk_idx` (`network_id`),
  KEY `Vasts_Languages_fk_idx_idx` (`language`)
) ENGINE=InnoDB AUTO_INCREMENT=772 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-24 15:59:15
