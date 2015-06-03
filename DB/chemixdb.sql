-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 03, 2015 at 02:08 PM
-- Server version: 5.1.41
-- PHP Version: 5.3.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `chemixdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `chemical`
--

CREATE TABLE IF NOT EXISTS `chemical` (
  `chemical_id` int(11) NOT NULL,
  `chemical_name` text NOT NULL,
  `chemical_notation` text NOT NULL,
  `image` longblob NOT NULL,
  PRIMARY KEY (`chemical_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chemical`
--


-- --------------------------------------------------------

--
-- Table structure for table `tb_reaction`
--

CREATE TABLE IF NOT EXISTS `tb_reaction` (
  `reaction_id` int(11) NOT NULL,
  `input_chemical` text NOT NULL,
  `output_chemical` text NOT NULL,
  `observation` text NOT NULL,
  `cataliist` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_reaction`
--

INSERT INTO `tb_reaction` (`reaction_id`, `input_chemical`, `output_chemical`, `observation`, `cataliist`) VALUES
(123, 'sfgfg', 'sfgfg', 'sf', 'gfg'),
(12, 'sfbgfb', 'dbs', 'ffggf', 'dgg\r\n');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
