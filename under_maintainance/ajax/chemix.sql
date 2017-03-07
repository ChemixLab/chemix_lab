-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 09, 2015 at 11:50 AM
-- Server version: 5.1.41
-- PHP Version: 5.3.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `chemix`
--

-- --------------------------------------------------------

--
-- Table structure for table `chemicals`
--

CREATE TABLE IF NOT EXISTS `chemicals` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `symbol` varchar(30) NOT NULL,
  `level` varchar(100) NOT NULL,
  `color` varchar(50) NOT NULL,
  `src` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `chemicals`
--

INSERT INTO `chemicals` (`id`, `name`, `symbol`, `level`, `color`, `src`) VALUES
(1, 'sodium', 'Na', 'fdh', 'yellow', 'img/chemical/a.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `reaction`
--

CREATE TABLE IF NOT EXISTS `reaction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `reactant1` varchar(100) NOT NULL,
  `rplevel1` varchar(100) NOT NULL,
  `reactant2` varchar(100) NOT NULL,
  `rplevel2` varchar(100) NOT NULL,
  `indicator` varchar(100) NOT NULL,
  `product1` varchar(100) NOT NULL,
  `pplevel1` varchar(5) NOT NULL,
  `product2` varchar(100) NOT NULL,
  `pplevel2` varchar(5) NOT NULL,
  `product3` varchar(100) NOT NULL,
  `pplevel3` varchar(5) NOT NULL,
  `observation1` varchar(200) NOT NULL,
  `observation2` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `reaction`
--

INSERT INTO `reaction` (`id`, `reactant1`, `rplevel1`, `reactant2`, `rplevel2`, `indicator`, `product1`, `pplevel1`, `product2`, `pplevel2`, `product3`, `pplevel3`, `observation1`, `observation2`) VALUES
(1, 'sodium', 's', 'water', 'aq', 'phynopthalin', 'sodiumhydroxid', 'aq', 'hydrogen', 'g', '', '', 'gass', ''),
(2, 'sodium', 's', 'chlorin', 'g', 'ph', 'sodiumchloride', 's', '', '', '', '', 'gass', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
