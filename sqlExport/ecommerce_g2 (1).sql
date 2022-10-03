-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 23-09-2022 a las 20:00:36
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ecommerce_g2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carts`
--

CREATE TABLE `carts` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `carts`
--

INSERT INTO `carts` (`id`, `user_id`) VALUES
(9, 3),
(11, 4),
(10, 5),
(8, 8),
(6, 9),
(16, 10),
(18, 11),
(15, 12),
(14, 13),
(17, 14),
(12, 15),
(7, 16),
(5, 17),
(4, 18),
(3, 19),
(13, 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE `category` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'ac'),
(2, 'duis'),
(3, 'aliquam convallis'),
(4, 'non velit'),
(5, 'sapien dignissim'),
(6, 'vestibulum'),
(7, 'dictumst maecenas'),
(8, 'adipiscing elit'),
(9, 'quam'),
(10, 'tristique est');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pictures`
--

CREATE TABLE `pictures` (
  `id` bigint(20) NOT NULL,
  `url` varchar(255) COLLATE utf8_bin NOT NULL,
  `description` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `product_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `pictures`
--

INSERT INTO `pictures` (`id`, `url`, `description`, `product_id`) VALUES
(1, 'http://dummyimage.com/208x100.png/5fa2dd/ffffff', 'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.', 3),
(2, 'http://dummyimage.com/183x100.png/ff4444/ffffff', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.', 51),
(3, 'http://dummyimage.com/198x100.png/ff4444/ffffff', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.', 67),
(4, 'http://dummyimage.com/105x100.png/ff4444/ffffff', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.', 36),
(5, 'http://dummyimage.com/129x100.png/cc0000/ffffff', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.', 92),
(6, 'http://dummyimage.com/219x100.png/dddddd/000000', 'Etiam vel augue.', 53),
(7, 'http://dummyimage.com/117x100.png/cc0000/ffffff', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.', 31),
(8, 'http://dummyimage.com/211x100.png/ff4444/ffffff', 'Nulla nisl. Nunc nisl.', 92),
(9, 'http://dummyimage.com/223x100.png/cc0000/ffffff', 'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.', 15),
(10, 'http://dummyimage.com/107x100.png/5fa2dd/ffffff', 'Maecenas pulvinar lobortis est. Phasellus sit amet erat.', 19),
(11, 'http://dummyimage.com/225x100.png/dddddd/000000', 'Proin eu mi.', 83),
(12, 'http://dummyimage.com/201x100.png/dddddd/000000', 'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.', 18),
(13, 'http://dummyimage.com/214x100.png/ff4444/ffffff', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.', 26),
(14, 'http://dummyimage.com/228x100.png/ff4444/ffffff', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.', 4),
(15, 'http://dummyimage.com/110x100.png/5fa2dd/ffffff', 'Praesent blandit.', 51),
(16, 'http://dummyimage.com/226x100.png/cc0000/ffffff', 'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.', 78),
(17, 'http://dummyimage.com/108x100.png/5fa2dd/ffffff', 'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 79),
(18, 'http://dummyimage.com/249x100.png/5fa2dd/ffffff', 'Ut at dolor quis odio consequat varius.', 66),
(19, 'http://dummyimage.com/179x100.png/cc0000/ffffff', 'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.', 14),
(20, 'http://dummyimage.com/156x100.png/ff4444/ffffff', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.', 4),
(21, 'http://dummyimage.com/237x100.png/cc0000/ffffff', 'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.', 15),
(22, 'http://dummyimage.com/229x100.png/dddddd/000000', 'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 23),
(23, 'http://dummyimage.com/151x100.png/dddddd/000000', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 95),
(24, 'http://dummyimage.com/157x100.png/5fa2dd/ffffff', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 73),
(25, 'http://dummyimage.com/162x100.png/ff4444/ffffff', 'Morbi non lectus.', 97),
(26, 'http://dummyimage.com/173x100.png/5fa2dd/ffffff', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.', 70),
(27, 'http://dummyimage.com/180x100.png/dddddd/000000', 'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.', 79),
(28, 'http://dummyimage.com/120x100.png/cc0000/ffffff', 'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.', 9),
(29, 'http://dummyimage.com/143x100.png/5fa2dd/ffffff', 'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.', 8),
(30, 'http://dummyimage.com/144x100.png/dddddd/000000', 'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.', 8),
(31, 'http://dummyimage.com/161x100.png/cc0000/ffffff', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.', 6),
(32, 'http://dummyimage.com/152x100.png/cc0000/ffffff', 'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.', 48),
(33, 'http://dummyimage.com/224x100.png/ff4444/ffffff', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.', 3),
(34, 'http://dummyimage.com/231x100.png/ff4444/ffffff', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 61),
(35, 'http://dummyimage.com/110x100.png/cc0000/ffffff', 'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.', 79),
(36, 'http://dummyimage.com/212x100.png/5fa2dd/ffffff', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.', 48),
(37, 'http://dummyimage.com/116x100.png/ff4444/ffffff', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.', 100),
(38, 'http://dummyimage.com/176x100.png/5fa2dd/ffffff', 'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.', 21),
(39, 'http://dummyimage.com/187x100.png/5fa2dd/ffffff', 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.', 95),
(40, 'http://dummyimage.com/108x100.png/5fa2dd/ffffff', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 99),
(41, 'http://dummyimage.com/218x100.png/5fa2dd/ffffff', 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.', 7),
(42, 'http://dummyimage.com/204x100.png/ff4444/ffffff', 'Etiam faucibus cursus urna.', 87),
(43, 'http://dummyimage.com/164x100.png/5fa2dd/ffffff', 'Pellentesque ultrices mattis odio.', 8),
(44, 'http://dummyimage.com/144x100.png/ff4444/ffffff', 'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.', 68),
(45, 'http://dummyimage.com/199x100.png/cc0000/ffffff', 'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 73),
(46, 'http://dummyimage.com/250x100.png/ff4444/ffffff', 'Nulla mollis molestie lorem. Quisque ut erat.', 59),
(47, 'http://dummyimage.com/106x100.png/5fa2dd/ffffff', 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 64),
(48, 'http://dummyimage.com/163x100.png/dddddd/000000', 'Suspendisse ornare consequat lectus.', 39),
(49, 'http://dummyimage.com/121x100.png/ff4444/ffffff', 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.', 79),
(50, 'http://dummyimage.com/156x100.png/ff4444/ffffff', 'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 29),
(51, 'http://dummyimage.com/154x100.png/ff4444/ffffff', 'Pellentesque at nulla.', 94),
(52, 'http://dummyimage.com/138x100.png/ff4444/ffffff', 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.', 46),
(53, 'http://dummyimage.com/182x100.png/ff4444/ffffff', 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 12),
(54, 'http://dummyimage.com/223x100.png/cc0000/ffffff', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 49),
(55, 'http://dummyimage.com/144x100.png/cc0000/ffffff', 'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 39),
(56, 'http://dummyimage.com/179x100.png/5fa2dd/ffffff', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.', 67),
(57, 'http://dummyimage.com/165x100.png/ff4444/ffffff', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.', 75),
(58, 'http://dummyimage.com/152x100.png/dddddd/000000', 'Nunc rhoncus dui vel sem. Sed sagittis.', 21),
(59, 'http://dummyimage.com/163x100.png/ff4444/ffffff', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 20),
(60, 'http://dummyimage.com/245x100.png/cc0000/ffffff', 'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 88),
(61, 'http://dummyimage.com/175x100.png/5fa2dd/ffffff', 'Nunc rhoncus dui vel sem.', 74),
(62, 'http://dummyimage.com/102x100.png/cc0000/ffffff', 'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.', 2),
(63, 'http://dummyimage.com/157x100.png/5fa2dd/ffffff', 'Nunc nisl.', 50),
(64, 'http://dummyimage.com/242x100.png/dddddd/000000', 'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.', 11),
(65, 'http://dummyimage.com/230x100.png/ff4444/ffffff', 'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 40),
(66, 'http://dummyimage.com/156x100.png/5fa2dd/ffffff', 'Praesent id massa id nisl venenatis lacinia.', 46),
(67, 'http://dummyimage.com/148x100.png/dddddd/000000', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna.', 44),
(68, 'http://dummyimage.com/197x100.png/ff4444/ffffff', 'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.', 43),
(69, 'http://dummyimage.com/148x100.png/5fa2dd/ffffff', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1),
(70, 'http://dummyimage.com/173x100.png/ff4444/ffffff', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 84),
(71, 'http://dummyimage.com/195x100.png/5fa2dd/ffffff', 'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 47),
(72, 'http://dummyimage.com/192x100.png/5fa2dd/ffffff', 'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.', 38),
(73, 'http://dummyimage.com/165x100.png/dddddd/000000', 'Integer tincidunt ante vel ipsum.', 14),
(74, 'http://dummyimage.com/142x100.png/dddddd/000000', 'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.', 55),
(75, 'http://dummyimage.com/222x100.png/ff4444/ffffff', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 16),
(76, 'http://dummyimage.com/167x100.png/dddddd/000000', 'Suspendisse potenti.', 93),
(77, 'http://dummyimage.com/183x100.png/dddddd/000000', 'In eleifend quam a odio. In hac habitasse platea dictumst.', 52),
(78, 'http://dummyimage.com/215x100.png/5fa2dd/ffffff', 'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit.', 18),
(79, 'http://dummyimage.com/119x100.png/cc0000/ffffff', 'Suspendisse ornare consequat lectus. In est risus, auctor sed.', 44),
(80, 'http://dummyimage.com/216x100.png/5fa2dd/ffffff', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.', 52),
(81, 'http://dummyimage.com/148x100.png/ff4444/ffffff', 'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu.', 23),
(82, 'http://dummyimage.com/120x100.png/ff4444/ffffff', 'Aenean auctor gravida sem.', 24),
(83, 'http://dummyimage.com/115x100.png/cc0000/ffffff', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.', 44),
(84, 'http://dummyimage.com/166x100.png/5fa2dd/ffffff', 'Cras in purus eu magna vulputate luctus.', 93),
(85, 'http://dummyimage.com/246x100.png/dddddd/000000', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.', 81),
(86, 'http://dummyimage.com/179x100.png/ff4444/ffffff', 'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo.', 70),
(87, 'http://dummyimage.com/206x100.png/5fa2dd/ffffff', 'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.', 48),
(88, 'http://dummyimage.com/223x100.png/cc0000/ffffff', 'Proin eu mi.', 36),
(89, 'http://dummyimage.com/156x100.png/cc0000/ffffff', 'Quisque id justo sit amet sapien dignissim vestibulum.', 57),
(90, 'http://dummyimage.com/160x100.png/ff4444/ffffff', 'Aliquam erat volutpat. In congue. Etiam justo.', 89),
(91, 'http://dummyimage.com/154x100.png/cc0000/ffffff', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.', 79),
(92, 'http://dummyimage.com/224x100.png/cc0000/ffffff', 'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.', 79),
(93, 'http://dummyimage.com/219x100.png/cc0000/ffffff', 'Nulla suscipit ligula in lacus.', 54),
(94, 'http://dummyimage.com/152x100.png/ff4444/ffffff', 'Proin at turpis a pede posuere nonummy.', 33),
(95, 'http://dummyimage.com/109x100.png/dddddd/000000', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.', 1),
(96, 'http://dummyimage.com/193x100.png/ff4444/ffffff', 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 17),
(97, 'http://dummyimage.com/177x100.png/dddddd/000000', 'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 20),
(98, 'http://dummyimage.com/142x100.png/cc0000/ffffff', 'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.', 58),
(99, 'http://dummyimage.com/231x100.png/ff4444/ffffff', 'Maecenas tristique, est et tempus semper, est quam pharetra magna.', 72),
(100, 'http://dummyimage.com/109x100.png/5fa2dd/ffffff', 'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem.', 58),
(101, 'http://dummyimage.com/123x100.png/dddddd/000000', 'Sed sagittis.', 89),
(102, 'http://dummyimage.com/128x100.png/ff4444/ffffff', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 50),
(103, 'http://dummyimage.com/191x100.png/5fa2dd/ffffff', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 39),
(104, 'http://dummyimage.com/110x100.png/ff4444/ffffff', 'Donec ut mauris eget massa tempor convallis.', 34),
(105, 'http://dummyimage.com/228x100.png/ff4444/ffffff', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.', 44),
(106, 'http://dummyimage.com/171x100.png/ff4444/ffffff', 'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.', 16),
(107, 'http://dummyimage.com/133x100.png/cc0000/ffffff', 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.', 34),
(108, 'http://dummyimage.com/218x100.png/5fa2dd/ffffff', 'Nulla ac enim.', 62),
(109, 'http://dummyimage.com/112x100.png/cc0000/ffffff', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 55),
(110, 'http://dummyimage.com/185x100.png/dddddd/000000', 'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis.', 61),
(111, 'http://dummyimage.com/153x100.png/5fa2dd/ffffff', 'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.', 14),
(112, 'http://dummyimage.com/189x100.png/cc0000/ffffff', 'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.', 24),
(113, 'http://dummyimage.com/190x100.png/dddddd/000000', 'Mauris lacinia sapien quis libero.', 93),
(114, 'http://dummyimage.com/220x100.png/dddddd/000000', 'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.', 68),
(115, 'http://dummyimage.com/178x100.png/cc0000/ffffff', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 4),
(116, 'http://dummyimage.com/230x100.png/ff4444/ffffff', 'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.', 21),
(117, 'http://dummyimage.com/238x100.png/5fa2dd/ffffff', 'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 41),
(118, 'http://dummyimage.com/145x100.png/ff4444/ffffff', 'Etiam justo.', 8),
(119, 'http://dummyimage.com/153x100.png/ff4444/ffffff', 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 45),
(120, 'http://dummyimage.com/121x100.png/cc0000/ffffff', 'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.', 26),
(121, 'http://dummyimage.com/247x100.png/cc0000/ffffff', 'Morbi quis tortor id nulla ultrices aliquet.', 86),
(122, 'http://dummyimage.com/157x100.png/ff4444/ffffff', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.', 73),
(123, 'http://dummyimage.com/192x100.png/dddddd/000000', 'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.', 50),
(124, 'http://dummyimage.com/129x100.png/dddddd/000000', 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 77),
(125, 'http://dummyimage.com/208x100.png/cc0000/ffffff', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.', 51),
(126, 'http://dummyimage.com/118x100.png/5fa2dd/ffffff', 'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem.', 74),
(127, 'http://dummyimage.com/114x100.png/cc0000/ffffff', 'Suspendisse potenti. In eleifend quam a odio.', 20),
(128, 'http://dummyimage.com/235x100.png/ff4444/ffffff', 'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.', 42),
(129, 'http://dummyimage.com/110x100.png/ff4444/ffffff', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.', 46),
(130, 'http://dummyimage.com/107x100.png/dddddd/000000', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.', 63),
(131, 'http://dummyimage.com/128x100.png/dddddd/000000', 'Nam dui.', 49),
(132, 'http://dummyimage.com/172x100.png/5fa2dd/ffffff', 'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo.', 90),
(133, 'http://dummyimage.com/189x100.png/dddddd/000000', 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 4),
(134, 'http://dummyimage.com/208x100.png/dddddd/000000', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.', 76),
(135, 'http://dummyimage.com/169x100.png/ff4444/ffffff', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.', 1),
(136, 'http://dummyimage.com/198x100.png/ff4444/ffffff', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.', 63),
(137, 'http://dummyimage.com/160x100.png/5fa2dd/ffffff', 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.', 59),
(138, 'http://dummyimage.com/196x100.png/dddddd/000000', 'Etiam vel augue.', 48),
(139, 'http://dummyimage.com/133x100.png/5fa2dd/ffffff', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.', 4),
(140, 'http://dummyimage.com/162x100.png/dddddd/000000', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.', 4),
(141, 'http://dummyimage.com/144x100.png/ff4444/ffffff', 'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.', 78),
(142, 'http://dummyimage.com/171x100.png/dddddd/000000', 'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.', 77),
(143, 'http://dummyimage.com/162x100.png/ff4444/ffffff', 'Nunc rhoncus dui vel sem. Sed sagittis.', 67),
(144, 'http://dummyimage.com/192x100.png/cc0000/ffffff', 'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede.', 55),
(145, 'http://dummyimage.com/123x100.png/dddddd/000000', 'Vestibulum sed magna at nunc commodo placerat. Praesent blandit.', 90),
(146, 'http://dummyimage.com/239x100.png/ff4444/ffffff', 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.', 16),
(147, 'http://dummyimage.com/102x100.png/ff4444/ffffff', 'Vivamus in felis eu sapien cursus vestibulum.', 23),
(148, 'http://dummyimage.com/189x100.png/5fa2dd/ffffff', 'Integer ac neque. Duis bibendum.', 48),
(149, 'http://dummyimage.com/237x100.png/cc0000/ffffff', 'Maecenas ut massa quis augue luctus tincidunt.', 86),
(150, 'http://dummyimage.com/229x100.png/cc0000/ffffff', 'Integer tincidunt ante vel ipsum.', 44),
(151, 'http://dummyimage.com/131x100.png/ff4444/ffffff', 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.', 96),
(152, 'http://dummyimage.com/166x100.png/5fa2dd/ffffff', 'Vivamus vel nulla eget eros elementum pellentesque.', 62),
(153, 'http://dummyimage.com/227x100.png/dddddd/000000', 'Nullam porttitor lacus at turpis.', 68),
(154, 'http://dummyimage.com/179x100.png/5fa2dd/ffffff', 'In congue.', 52),
(155, 'http://dummyimage.com/101x100.png/ff4444/ffffff', 'Nunc rhoncus dui vel sem. Sed sagittis.', 85),
(156, 'http://dummyimage.com/249x100.png/cc0000/ffffff', 'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus.', 25),
(157, 'http://dummyimage.com/145x100.png/dddddd/000000', 'Phasellus sit amet erat. Nulla tempus.', 67),
(158, 'http://dummyimage.com/170x100.png/5fa2dd/ffffff', 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.', 58),
(159, 'http://dummyimage.com/203x100.png/5fa2dd/ffffff', 'Vivamus tortor.', 92),
(160, 'http://dummyimage.com/225x100.png/dddddd/000000', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.', 86),
(161, 'http://dummyimage.com/202x100.png/dddddd/000000', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.', 55),
(162, 'http://dummyimage.com/231x100.png/cc0000/ffffff', 'Morbi a ipsum. Integer a nibh. In quis justo.', 33),
(163, 'http://dummyimage.com/231x100.png/5fa2dd/ffffff', 'Curabitur convallis.', 9),
(164, 'http://dummyimage.com/129x100.png/dddddd/000000', 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.', 26),
(165, 'http://dummyimage.com/241x100.png/dddddd/000000', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna.', 68),
(166, 'http://dummyimage.com/129x100.png/dddddd/000000', 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 27),
(167, 'http://dummyimage.com/164x100.png/5fa2dd/ffffff', 'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id.', 97),
(168, 'http://dummyimage.com/141x100.png/cc0000/ffffff', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 85),
(169, 'http://dummyimage.com/133x100.png/ff4444/ffffff', 'Suspendisse ornare consequat lectus.', 66),
(170, 'http://dummyimage.com/192x100.png/cc0000/ffffff', 'Morbi quis tortor id nulla ultrices aliquet.', 58),
(171, 'http://dummyimage.com/150x100.png/ff4444/ffffff', 'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.', 34),
(172, 'http://dummyimage.com/204x100.png/ff4444/ffffff', 'Duis bibendum. Morbi non quam nec dui luctus rutrum.', 82),
(173, 'http://dummyimage.com/189x100.png/dddddd/000000', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.', 74),
(174, 'http://dummyimage.com/235x100.png/dddddd/000000', 'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 25),
(175, 'http://dummyimage.com/213x100.png/ff4444/ffffff', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetr.', 19),
(176, 'http://dummyimage.com/241x100.png/ff4444/ffffff', 'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.', 48),
(177, 'http://dummyimage.com/163x100.png/dddddd/000000', 'Etiam vel augue. Vestibulum rutrum rutrum neque.', 96),
(178, 'http://dummyimage.com/212x100.png/cc0000/ffffff', 'Proin risus. Praesent lectus.', 32),
(179, 'http://dummyimage.com/149x100.png/dddddd/000000', 'Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 56),
(180, 'http://dummyimage.com/226x100.png/dddddd/000000', 'Nulla tempus.', 100),
(181, 'http://dummyimage.com/130x100.png/cc0000/ffffff', 'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.', 91),
(182, 'http://dummyimage.com/134x100.png/ff4444/ffffff', 'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.', 37),
(183, 'http://dummyimage.com/221x100.png/dddddd/000000', 'Donec quis orci eget orci vehicula condimentum.', 27),
(184, 'http://dummyimage.com/220x100.png/cc0000/ffffff', 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.', 10),
(185, 'http://dummyimage.com/137x100.png/cc0000/ffffff', 'Pellentesque eget nunc.', 15),
(186, 'http://dummyimage.com/199x100.png/cc0000/ffffff', 'Donec ut dolor.', 30),
(187, 'http://dummyimage.com/244x100.png/ff4444/ffffff', 'Pellentesque at nulla. Suspendisse potenti.', 41),
(188, 'http://dummyimage.com/143x100.png/dddddd/000000', 'Duis consequat dui nec nisi volutpat eleifend.', 97),
(189, 'http://dummyimage.com/130x100.png/ff4444/ffffff', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.', 43),
(190, 'http://dummyimage.com/108x100.png/dddddd/000000', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 73),
(191, 'http://dummyimage.com/210x100.png/ff4444/ffffff', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lore.', 16),
(192, 'http://dummyimage.com/146x100.png/ff4444/ffffff', 'Sed vel enim sit amet nunc viverra dapibus.', 43),
(193, 'http://dummyimage.com/215x100.png/5fa2dd/ffffff', 'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.', 57),
(194, 'http://dummyimage.com/124x100.png/5fa2dd/ffffff', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.', 92),
(195, 'http://dummyimage.com/204x100.png/ff4444/ffffff', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien.', 54),
(196, 'http://dummyimage.com/214x100.png/5fa2dd/ffffff', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id.', 58),
(197, 'http://dummyimage.com/228x100.png/cc0000/ffffff', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.', 26),
(198, 'http://dummyimage.com/231x100.png/cc0000/ffffff', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 40),
(199, 'http://dummyimage.com/184x100.png/cc0000/ffffff', 'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique.', 76),
(200, 'http://dummyimage.com/218x100.png/5fa2dd/ffffff', 'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.', 85),
(201, 'http://dummyimage.com/155x100.png/dddddd/000000', 'Duis mattis egestas metus.', 78),
(202, 'http://dummyimage.com/246x100.png/cc0000/ffffff', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Cura.', 12),
(203, 'http://dummyimage.com/236x100.png/dddddd/000000', 'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque.', 6),
(204, 'http://dummyimage.com/195x100.png/dddddd/000000', 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 30),
(205, 'http://dummyimage.com/196x100.png/dddddd/000000', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 23),
(206, 'http://dummyimage.com/107x100.png/dddddd/000000', 'Quisque ut erat. Curabitur gravida nisi at nibh.', 11),
(207, 'http://dummyimage.com/175x100.png/dddddd/000000', 'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem.', 84),
(208, 'http://dummyimage.com/216x100.png/ff4444/ffffff', 'Donec dapibus. Duis at velit eu est congue elementum. In hac.', 61),
(209, 'http://dummyimage.com/202x100.png/5fa2dd/ffffff', 'Proin eu mi. Nulla ac enim.', 58),
(210, 'http://dummyimage.com/183x100.png/dddddd/000000', 'Etiam pretium iaculis justo.', 28),
(211, 'http://dummyimage.com/144x100.png/dddddd/000000', 'Morbi non lectus.', 94),
(212, 'http://dummyimage.com/171x100.png/cc0000/ffffff', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue.', 25),
(213, 'http://dummyimage.com/125x100.png/ff4444/ffffff', 'Nulla mollis molestie lorem. Quisque ut erat.', 28),
(214, 'http://dummyimage.com/218x100.png/5fa2dd/ffffff', 'Donec ut mauris eget massa tempor convallis. Nulla neque libero.', 53),
(215, 'http://dummyimage.com/106x100.png/5fa2dd/ffffff', 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 78),
(216, 'http://dummyimage.com/233x100.png/dddddd/000000', 'Curabitur gravida nisi at nibh.', 13),
(217, 'http://dummyimage.com/177x100.png/cc0000/ffffff', 'Duis bibendum. Morbi non quam nec dui luctus rutrum.', 69),
(218, 'http://dummyimage.com/171x100.png/ff4444/ffffff', 'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non.', 29),
(219, 'http://dummyimage.com/162x100.png/5fa2dd/ffffff', 'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta.', 58),
(220, 'http://dummyimage.com/134x100.png/cc0000/ffffff', 'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.', 18),
(221, 'http://dummyimage.com/174x100.png/dddddd/000000', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat..', 19),
(222, 'http://dummyimage.com/146x100.png/cc0000/ffffff', 'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.', 98),
(223, 'http://dummyimage.com/137x100.png/cc0000/ffffff', 'Nam nulla.', 66),
(224, 'http://dummyimage.com/231x100.png/ff4444/ffffff', 'In sagittis dui vel nisl. Duis ac nibh.', 29),
(225, 'http://dummyimage.com/141x100.png/cc0000/ffffff', 'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.', 58),
(226, 'http://dummyimage.com/166x100.png/dddddd/000000', 'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio.', 31),
(227, 'http://dummyimage.com/170x100.png/5fa2dd/ffffff', 'Mauris sit amet eros.', 58),
(228, 'http://dummyimage.com/246x100.png/dddddd/000000', 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl.', 62),
(229, 'http://dummyimage.com/134x100.png/5fa2dd/ffffff', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi.', 6),
(230, 'http://dummyimage.com/224x100.png/cc0000/ffffff', 'Integer ac neque. Duis bibendum.', 3),
(231, 'http://dummyimage.com/142x100.png/cc0000/ffffff', 'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis.', 37),
(232, 'http://dummyimage.com/181x100.png/5fa2dd/ffffff', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.', 29),
(233, 'http://dummyimage.com/106x100.png/cc0000/ffffff', 'Nulla nisl.', 22),
(234, 'http://dummyimage.com/114x100.png/5fa2dd/ffffff', 'Praesent blandit lacinia erat.', 84),
(235, 'http://dummyimage.com/158x100.png/ff4444/ffffff', 'Nullam varius.', 57),
(236, 'http://dummyimage.com/139x100.png/ff4444/ffffff', 'Fusce posuere felis sed lacus.', 4),
(237, 'http://dummyimage.com/199x100.png/5fa2dd/ffffff', 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 57),
(238, 'http://dummyimage.com/189x100.png/dddddd/000000', 'Maecenas pulvinar lobortis est.', 17),
(239, 'http://dummyimage.com/174x100.png/5fa2dd/ffffff', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.', 28),
(240, 'http://dummyimage.com/228x100.png/5fa2dd/ffffff', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.', 32),
(241, 'http://dummyimage.com/243x100.png/dddddd/000000', 'Proin eu mi.', 38),
(242, 'http://dummyimage.com/114x100.png/ff4444/ffffff', 'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.', 35),
(243, 'http://dummyimage.com/114x100.png/cc0000/ffffff', 'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.', 64),
(244, 'http://dummyimage.com/234x100.png/cc0000/ffffff', 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac.', 71),
(245, 'http://dummyimage.com/126x100.png/cc0000/ffffff', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.', 37),
(246, 'http://dummyimage.com/207x100.png/5fa2dd/ffffff', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum.', 77),
(247, 'http://dummyimage.com/136x100.png/ff4444/ffffff', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 63),
(248, 'http://dummyimage.com/104x100.png/5fa2dd/ffffff', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.', 10),
(249, 'http://dummyimage.com/105x100.png/cc0000/ffffff', 'Nullam sit amet turpis elementum ligula vehicula consequat.', 15),
(250, 'http://dummyimage.com/121x100.png/cc0000/ffffff', 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 39),
(251, 'http://dummyimage.com/179x100.png/ff4444/ffffff', 'Morbi porttitor lorem id ligula.', 55),
(252, 'http://dummyimage.com/106x100.png/ff4444/ffffff', 'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.', 28),
(253, 'http://dummyimage.com/202x100.png/ff4444/ffffff', 'Praesent blandit.', 25),
(254, 'http://dummyimage.com/180x100.png/5fa2dd/ffffff', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 49),
(255, 'http://dummyimage.com/244x100.png/dddddd/000000', 'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.', 73),
(256, 'http://dummyimage.com/226x100.png/dddddd/000000', 'Proin at turpis a pede posuere nonummy.', 35),
(257, 'http://dummyimage.com/214x100.png/5fa2dd/ffffff', 'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.', 23),
(258, 'http://dummyimage.com/167x100.png/dddddd/000000', 'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.', 90),
(259, 'http://dummyimage.com/130x100.png/ff4444/ffffff', 'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.', 89),
(260, 'http://dummyimage.com/198x100.png/cc0000/ffffff', 'Aliquam quis turpis eget elit sodales scelerisque.', 70),
(261, 'http://dummyimage.com/193x100.png/cc0000/ffffff', 'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.', 63),
(262, 'http://dummyimage.com/110x100.png/ff4444/ffffff', 'Donec posuere metus vitae ipsum.', 44),
(263, 'http://dummyimage.com/149x100.png/dddddd/000000', 'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat.', 51),
(264, 'http://dummyimage.com/231x100.png/cc0000/ffffff', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.', 90),
(265, 'http://dummyimage.com/203x100.png/5fa2dd/ffffff', 'Integer non velit.', 36),
(266, 'http://dummyimage.com/146x100.png/cc0000/ffffff', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 80),
(267, 'http://dummyimage.com/101x100.png/cc0000/ffffff', 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.', 54),
(268, 'http://dummyimage.com/136x100.png/5fa2dd/ffffff', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque.', 82),
(269, 'http://dummyimage.com/197x100.png/5fa2dd/ffffff', 'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.', 38),
(270, 'http://dummyimage.com/103x100.png/cc0000/ffffff', 'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.', 58),
(271, 'http://dummyimage.com/151x100.png/5fa2dd/ffffff', 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 67),
(272, 'http://dummyimage.com/218x100.png/ff4444/ffffff', 'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique.', 6),
(273, 'http://dummyimage.com/225x100.png/5fa2dd/ffffff', 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.', 50),
(274, 'http://dummyimage.com/187x100.png/5fa2dd/ffffff', 'Aliquam sit amet diam in magna bibendum imperdiet.', 12),
(275, 'http://dummyimage.com/211x100.png/ff4444/ffffff', 'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio.', 98),
(276, 'http://dummyimage.com/187x100.png/dddddd/000000', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 55),
(277, 'http://dummyimage.com/183x100.png/cc0000/ffffff', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.', 49),
(278, 'http://dummyimage.com/176x100.png/ff4444/ffffff', 'Donec ut dolor.', 18),
(279, 'http://dummyimage.com/100x100.png/dddddd/000000', 'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem.', 87),
(280, 'http://dummyimage.com/243x100.png/cc0000/ffffff', 'Nullam sit amet turpis elementum ligula vehicula consequat.', 16),
(281, 'http://dummyimage.com/231x100.png/cc0000/ffffff', 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit.', 48),
(282, 'http://dummyimage.com/143x100.png/5fa2dd/ffffff', 'Nulla tellus.', 67),
(283, 'http://dummyimage.com/130x100.png/ff4444/ffffff', 'Aenean lectus.', 23),
(284, 'http://dummyimage.com/100x100.png/cc0000/ffffff', 'Morbi non lectus.', 90),
(285, 'http://dummyimage.com/134x100.png/dddddd/000000', 'Sed ante.', 69),
(286, 'http://dummyimage.com/139x100.png/cc0000/ffffff', 'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.', 81),
(287, 'http://dummyimage.com/117x100.png/dddddd/000000', 'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar.', 81),
(288, 'http://dummyimage.com/207x100.png/ff4444/ffffff', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.', 43),
(289, 'http://dummyimage.com/239x100.png/5fa2dd/ffffff', 'Morbi non quam nec dui luctus rutrum. Nulla tellus.', 92),
(290, 'http://dummyimage.com/200x100.png/dddddd/000000', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.', 7),
(291, 'http://dummyimage.com/173x100.png/5fa2dd/ffffff', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 18),
(292, 'http://dummyimage.com/149x100.png/cc0000/ffffff', 'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.', 27),
(293, 'http://dummyimage.com/156x100.png/5fa2dd/ffffff', 'Integer a nibh.', 73),
(294, 'http://dummyimage.com/230x100.png/5fa2dd/ffffff', 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.', 37),
(295, 'http://dummyimage.com/197x100.png/5fa2dd/ffffff', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis.', 36),
(296, 'http://dummyimage.com/225x100.png/ff4444/ffffff', 'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.', 10),
(297, 'http://dummyimage.com/232x100.png/dddddd/000000', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.', 29),
(298, 'http://dummyimage.com/173x100.png/dddddd/000000', 'Integer tincidunt ante vel ipsum.', 67),
(299, 'http://dummyimage.com/189x100.png/cc0000/ffffff', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna.', 40),
(300, 'http://dummyimage.com/137x100.png/cc0000/ffffff', 'Aenean fermentum.', 97),
(301, 'http://dummyimage.com/224x100.png/ff4444/ffffff', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.', 61),
(302, 'http://dummyimage.com/181x100.png/cc0000/ffffff', 'Pellentesque ultrices mattis odio.', 65),
(303, 'http://dummyimage.com/180x100.png/ff4444/ffffff', 'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede.', 47),
(304, 'http://dummyimage.com/209x100.png/ff4444/ffffff', 'Proin eu mi.', 53),
(305, 'http://dummyimage.com/232x100.png/cc0000/ffffff', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet.', 77),
(306, 'http://dummyimage.com/141x100.png/dddddd/000000', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 14),
(307, 'http://dummyimage.com/179x100.png/cc0000/ffffff', 'Praesent blandit. Nam nulla.', 70),
(308, 'http://dummyimage.com/151x100.png/cc0000/ffffff', 'Suspendisse ornare consequat lectus. In est risus, auctor sed.', 42),
(309, 'http://dummyimage.com/249x100.png/cc0000/ffffff', 'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus.', 87),
(310, 'http://dummyimage.com/198x100.png/cc0000/ffffff', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.', 31),
(311, 'http://dummyimage.com/197x100.png/5fa2dd/ffffff', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 66),
(312, 'http://dummyimage.com/113x100.png/dddddd/000000', 'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu.', 2),
(313, 'http://dummyimage.com/144x100.png/5fa2dd/ffffff', 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl.', 8),
(314, 'http://dummyimage.com/238x100.png/dddddd/000000', 'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.', 18),
(315, 'http://dummyimage.com/191x100.png/ff4444/ffffff', 'Proin at turpis a pede posuere nonummy.', 95),
(316, 'http://dummyimage.com/160x100.png/dddddd/000000', 'Suspendisse accumsan tortor quis turpis. Sed ante.', 8),
(317, 'http://dummyimage.com/239x100.png/ff4444/ffffff', 'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.', 67),
(318, 'http://dummyimage.com/244x100.png/cc0000/ffffff', 'Morbi porttitor lorem id ligula.', 60),
(319, 'http://dummyimage.com/145x100.png/dddddd/000000', 'Mauris lacinia sapien quis libero.', 88),
(320, 'http://dummyimage.com/109x100.png/ff4444/ffffff', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.', 91),
(321, 'http://dummyimage.com/173x100.png/cc0000/ffffff', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.', 57),
(322, 'http://dummyimage.com/233x100.png/ff4444/ffffff', 'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed.', 11),
(323, 'http://dummyimage.com/164x100.png/5fa2dd/ffffff', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 32),
(324, 'http://dummyimage.com/183x100.png/5fa2dd/ffffff', 'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero.', 25),
(325, 'http://dummyimage.com/121x100.png/cc0000/ffffff', 'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.', 67),
(326, 'http://dummyimage.com/162x100.png/dddddd/000000', 'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus.', 16);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` bigint(20) NOT NULL,
  `title` varchar(255) COLLATE utf8_bin NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `description` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `category_id` bigint(20) DEFAULT NULL,
  `mostwanted` tinyint(1) DEFAULT 0,
  `stock` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `title`, `price`, `description`, `category_id`, `mostwanted`, `stock`) VALUES
(1, 'Wine - Niagara Peninsula Vqa', '2951', 'eu massa donec dapibus duis at velit eu est congue elementum in', 9, 1, 5),
(2, 'Shrimp - Black Tiger 6 - 8', '5363', 'eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus', 1, 0, 4),
(3, 'Longos - Grilled Salmon With Bbq', '1998', 'luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur', 7, 1, 8),
(4, 'Pasta - Penne, Lisce, Dry', '2723', 'pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam', 2, 0, 10),
(5, 'Asparagus - White, Fresh', '4161', 'amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius', 3, 0, 2),
(6, 'Tart - Raisin And Pecan', '7517', 'nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla', 6, 0, 7),
(7, 'Croissant, Raw - Mini', '3368', 'quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio', 3, 0, 5),
(8, 'Mix - Cocktail Strawberry Daiquiri', '5013', 'accumsan tellus nisi eu orci mauris lacinia sapien quis libero', 1, 1, 1),
(9, 'Glass - Wine, Plastic, Clear 5 Oz', '859', 'consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac', 7, 0, 1),
(10, 'Veal - Sweetbread', '4017', 'gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae', 6, 1, 10),
(11, 'Tart - Lemon', '1826', 'curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo', 8, 1, 4),
(12, 'Wine - Casillero Del Diablo', '1009', 'posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi', 8, 0, 5),
(13, 'Grenadillo', '6718', 'quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi', 2, 1, 9),
(14, 'Sauce - Roasted Red Pepper', '1013', 'curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit', 4, 1, 1),
(15, 'Sprouts - Alfalfa', '5762', 'eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in', 5, 1, 5),
(16, 'Chef Hat 25cm', '4196', 'sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede', 1, 0, 3),
(17, 'Chocolate - Milk', '4680', 'sapien varius ut blandit non interdum in ante vestibulum ante', 10, 1, 2),
(18, 'Chocolate - Chips Compound', '6492', 'lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque', 3, 1, 4),
(19, 'Bread - Roll, Italian', '2697', 'lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus', 5, 1, 1),
(20, 'Pasta - Cheese / Spinach Bauletti', '6939', 'vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae', 2, 1, 4),
(21, 'Lady Fingers', '8388', 'ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit', 7, 0, 7),
(22, 'Sauce - Hp', '8487', 'cum sociis natoque penatibus et magnis dis parturient montes nascetur', 5, 0, 4),
(23, 'Pork - Loin, Boneless', '3369', 'cras in purus eu magna vulputate luctus cum sociis natoque', 8, 1, 10),
(24, 'Lentils - Green Le Puy', '16', 'quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et', 5, 1, 1),
(25, 'Tea - Herbal - 6 Asst', '7626', 'odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet', 2, 0, 4),
(26, 'Bread - Roll, Soft White Round', '4144', 'vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget', 7, 1, 10),
(27, 'Juice - Lemon', '3535', 'in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam', 2, 1, 5),
(28, 'Rum - Light, Captain Morgan', '6909', 'convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi', 7, 0, 4),
(29, 'Rhubarb', '43', 'adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit', 6, 0, 9),
(30, 'Breakfast Quesadillas', '3467', 'platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi', 10, 0, 10),
(31, 'Beer - Upper Canada Light', '7406', 'purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient', 9, 1, 7),
(32, 'Kohlrabi', '3090', 'vel augue vestibulum ante ipsum primis in faucibus orci luctus et', 6, 1, 8),
(33, 'Mushroom - Crimini', '1301', 'metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra', 2, 0, 1),
(34, 'Truffle Paste', '244', 'consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices', 9, 0, 1),
(35, 'Plasticspoonblack', '5254', 'tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien', 3, 1, 6),
(36, 'Sauce - Hoisin', '3550', 'vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien', 1, 1, 9),
(37, 'Asparagus - White, Fresh', '4300', 'quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum', 2, 1, 1),
(38, 'Island Oasis - Ice Cream Mix', '140', 'sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et', 3, 1, 5),
(39, 'Coffee Guatemala Dark', '2824', 'potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes', 6, 0, 10),
(40, 'Wood Chips - Regular', '1171', 'pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper', 1, 1, 4),
(41, 'Beef - Rib Roast, Cap On', '5955', 'ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque', 3, 1, 6),
(42, 'Wine - Fino Tio Pepe Gonzalez', '8365', 'hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien', 1, 1, 10),
(43, 'Chicken - Whole', '893', 'semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum', 6, 1, 3),
(44, 'Chevere Logs', '4695', 'faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus', 10, 1, 10),
(45, 'Cake Circle, Foil, Scallop', '6689', 'quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris', 10, 1, 5),
(46, 'Cookies Almond Hazelnut', '3218', 'nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis', 8, 0, 8),
(47, 'Wine - Wyndham Estate Bin 777', '160', 'primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus', 1, 1, 6),
(48, 'Turkey Leg With Drum And Thigh', '4115', 'cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus', 10, 1, 3),
(49, 'Pepper - Red, Finger Hot', '3235', 'vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget', 5, 1, 6),
(50, 'Fudge - Chocolate Fudge', '6305', 'in consequat ut nulla sed accumsan felis ut at dolor', 1, 0, 10),
(51, 'Country Roll', '4055', 'scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis', 5, 0, 9),
(52, 'Nantucket - Orange Mango Cktl', '3188', 'cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis', 10, 1, 9),
(53, 'Tart Shells - Sweet, 4', '7418', 'volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus', 8, 1, 4),
(54, 'Sauce - Plum', '3792', 'mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue', 7, 0, 5),
(55, 'Mop Head - Cotton, 24 Oz', '5211', 'id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed', 4, 0, 3),
(56, 'Pastry - Banana Muffin - Mini', '1113', 'accumsan felis ut at dolor quis odio consequat varius integer ac', 6, 0, 3),
(57, 'Mushroom Morel Fresh', '3063', 'condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu', 2, 0, 3),
(58, 'Bread - Rolls, Rye', '7044', 'habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla', 5, 1, 5),
(59, 'Duck - Whole', '7209', 'ut at dolor quis odio consequat varius integer ac leo', 6, 1, 1),
(60, 'Pepper - Red Thai', '7310', 'pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique', 5, 0, 4),
(61, 'Ocean Spray - Kiwi Strawberry', '5573', 'natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel', 4, 1, 2),
(62, 'Bowl 12 Oz - Showcase 92012', '3346', 'nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia', 7, 1, 2),
(63, 'Crab - Claws, 26 - 30', '8264', 'turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices', 2, 0, 3),
(64, 'Mayonnaise', '2684', 'metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia', 6, 0, 5),
(65, 'Truffle Shells - White Chocolate', '886', 'aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci', 6, 1, 8),
(66, 'Contreau', '7979', 'tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula', 3, 0, 8),
(67, 'Wine - Marlbourough Sauv Blanc', '4458', 'fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id', 1, 0, 2),
(68, 'Chicken Breast Halal', '2244', 'donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis', 2, 1, 9),
(69, 'Cheese - Gouda', '825', 'sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque', 4, 0, 7),
(70, 'Vinegar - Red Wine', '3161', 'ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor', 2, 1, 6),
(71, 'Bread - Crusty Italian Poly', '4223', 'ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac', 5, 0, 10),
(72, 'Fish - Bones', '5734', 'non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet', 4, 1, 1),
(73, 'Cabbage Roll', '7381', 'at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo', 8, 0, 6),
(74, 'Wine - Champagne Brut Veuve', '8099', 'massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut', 1, 0, 9),
(75, 'Lamb - Loin Chops', '1067', 'in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem', 10, 0, 6),
(76, 'Veal Inside - Provimi', '6463', 'primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor', 5, 1, 4),
(77, 'Extract - Almond', '5098', 'nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue', 9, 1, 7),
(78, 'Red Cod Fillets - 225g', '8043', 'quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum', 5, 1, 2),
(79, 'Trout - Rainbow, Frozen', '4172', 'nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum', 1, 1, 6),
(80, 'Melon - Cantaloupe', '2133', 'dui maecenas tristique est et tempus semper est quam pharetra', 3, 1, 10),
(81, 'Tabasco Sauce, 2 Oz', '779', 'urna ut tellus nulla ut erat id mauris vulputate elementum nullam', 10, 1, 9),
(82, 'Sobe - Liz Blizz', '7938', 'suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem', 8, 0, 2),
(83, 'Plastic Arrow Stir Stick', '4769', 'id lobortis convallis tortor risus dapibus augue vel accumsan tellus', 10, 0, 4),
(84, 'Cranberries - Frozen', '2316', 'lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel', 3, 1, 10),
(85, 'Godiva White Chocolate', '3882', 'phasellus sit amet erat nulla tempus vivamus in felis eu sapien', 8, 1, 6),
(86, 'Sugar - Brown, Individual', '4102', 'nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in', 7, 1, 1),
(87, 'Pork - Tenderloin, Fresh', '1108', 'pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio', 9, 0, 3),
(88, 'Wine - Soave Folonari', '1162', 'maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta', 4, 0, 4),
(89, 'Muffin Chocolate Individual Wrap', '5326', 'nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi', 4, 0, 7),
(90, 'Wine - Vidal Icewine Magnotta', '3808', 'faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi', 4, 1, 8),
(91, 'Doilies - 5, Paper', '4690', 'nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis', 6, 1, 8),
(92, 'Shiro Miso', '4986', 'massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit', 10, 1, 8),
(93, 'Puree - Mango', '8642', 'hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci', 2, 0, 5),
(94, 'Chocolate Liqueur - Godet White', '8722', 'vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan', 2, 0, 7),
(95, 'Crab Meat Claw Pasteurise', '3813', 'rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa', 10, 0, 2),
(96, 'Pork - Caul Fat', '8502', 'integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla', 4, 1, 3),
(97, 'Cake - French Pear Tart', '2520', 'at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget', 9, 1, 3),
(98, 'Veal - Insides Provini', '7772', 'in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur', 9, 1, 9),
(99, 'Olives - Black, Pitted', '3194', 'dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut', 6, 1, 9),
(100, 'Tuna - Loin', '5717', 'ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non', 4, 1, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_cart`
--

CREATE TABLE `product_cart` (
  `id` bigint(20) NOT NULL,
  `cart_id` bigint(20) NOT NULL,
  `product_id` bigint(20) NOT NULL,
  `quantity` bigint(20) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `product_cart`
--

INSERT INTO `product_cart` (`id`, `cart_id`, `product_id`, `quantity`, `created_at`, `updated_at`) VALUES
(2, 13, 24, 12, '2021-07-11 02:26:27', '2021-09-30 15:44:22'),
(3, 16, 8, 4, '2021-08-06 17:07:56', '2021-07-09 19:29:27'),
(4, 13, 92, 2, '2021-08-18 17:34:42', '2022-09-04 09:39:44'),
(5, 8, 87, 11, '2021-08-01 05:18:11', '2021-07-21 01:51:37'),
(6, 3, 55, 9, '2021-08-27 05:31:12', '2021-08-03 14:25:19'),
(7, 16, 67, 4, '2021-09-08 13:54:13', '2022-05-20 12:08:23'),
(8, 14, 79, 1, '2021-07-25 19:26:22', '2022-02-19 06:20:40'),
(9, 13, 99, 6, '2021-08-23 11:42:07', '2022-09-21 19:00:00'),
(10, 15, 68, 7, '2021-08-30 07:25:39', '2022-07-19 23:12:24'),
(11, 17, 15, 11, '2021-08-27 05:34:13', '2022-09-08 10:45:59'),
(12, 4, 7, 8, '2021-08-15 20:36:51', '2022-07-26 02:10:13'),
(13, 9, 54, 11, '2021-08-02 01:34:37', '2021-11-08 19:50:35'),
(14, 15, 97, 1, '2021-07-24 01:14:47', '2021-08-03 07:04:22'),
(15, 12, 55, 8, '2021-08-09 22:16:00', '2022-07-27 23:22:14'),
(16, 16, 29, 9, '2021-08-30 08:49:31', '2022-02-08 19:39:22'),
(17, 9, 26, 4, '2021-09-04 10:44:59', '2021-09-01 21:59:16'),
(18, 12, 75, 8, '2021-07-17 01:56:36', '2021-10-17 13:59:24'),
(19, 5, 4, 12, '2021-08-15 07:35:34', '2022-08-13 01:22:36'),
(20, 12, 66, 11, '2021-08-18 03:53:23', '2021-08-23 21:43:44'),
(21, 3, 60, 12, '2021-08-30 05:03:24', '2022-01-01 11:21:50'),
(22, 8, 66, 3, '2021-08-26 00:20:02', '2022-04-08 07:14:17'),
(23, 12, 99, 11, '2021-08-26 08:40:48', '2022-01-07 18:39:08'),
(24, 5, 76, 7, '2021-08-12 14:00:54', '2022-01-27 10:25:12'),
(25, 4, 77, 1, '2021-08-06 05:35:09', '2022-07-02 19:13:29'),
(26, 13, 49, 5, '2021-08-16 21:17:36', '2021-08-10 20:16:22'),
(27, 12, 88, 2, '2021-09-01 01:13:12', '2022-05-31 14:53:05'),
(28, 15, 65, 5, '2021-08-03 11:52:15', '2021-10-29 18:25:22'),
(29, 10, 21, 10, '2021-07-30 19:47:32', '2021-11-25 05:06:25'),
(30, 16, 27, 6, '2021-07-20 22:59:56', '2022-07-26 05:38:11'),
(31, 3, 6, 7, '2021-08-11 20:30:26', '2022-07-11 05:32:11'),
(32, 18, 40, 11, '2021-08-18 11:31:04', '2022-04-20 21:55:38'),
(33, 18, 51, 10, '2021-08-23 03:11:30', '2022-08-06 13:26:55'),
(34, 9, 59, 5, '2021-07-12 12:19:05', '2021-12-04 05:16:13'),
(35, 13, 52, 9, '2021-07-13 13:02:14', '2022-04-25 19:14:11'),
(36, 15, 20, 7, '2021-08-25 09:32:19', '2021-07-22 00:16:30'),
(37, 15, 40, 11, '2021-08-20 12:55:21', '2021-12-24 09:55:38'),
(38, 7, 44, 10, '2021-07-07 16:42:15', '2021-07-29 00:16:44'),
(39, 6, 73, 9, '2021-08-01 06:49:06', '2022-02-12 07:13:06'),
(40, 11, 62, 5, '2021-08-17 08:48:18', '2021-09-17 12:21:55'),
(41, 8, 89, 9, '2021-07-28 18:04:00', '2022-01-11 13:40:34');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) COLLATE utf8_bin NOT NULL,
  `username` varchar(255) COLLATE utf8_bin NOT NULL,
  `password` varchar(255) COLLATE utf8_bin NOT NULL,
  `first_name` varchar(255) COLLATE utf8_bin NOT NULL,
  `last_name` varchar(255) COLLATE utf8_bin NOT NULL,
  `profilepic` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `role` varchar(10) COLLATE utf8_bin DEFAULT 'GUEST'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `email`, `username`, `password`, `first_name`, `last_name`, `profilepic`, `role`) VALUES
(1, 'siacobo0@patch.com', 'siacobo0', '123456', 'Shay', 'Iacobo', 'http://dummyimage.com/233x100.png/5fa2dd/ffffff', 'GOD'),
(2, 'ibrabham1@cbslocal.com', 'ibrabham1', '123456', 'Irma', 'Brabham', 'http://dummyimage.com/201x100.png/dddddd/000000', 'GUEST'),
(3, 'mlemin2@nationalgeographic.com', 'mlemin2', '123456', 'Myra', 'Lemin', 'http://dummyimage.com/146x100.png/dddddd/000000', 'GUEST'),
(4, 'gtutchener3@ca.gov', 'gtutchener3', '123456', 'Garwood', 'Tutchener', 'http://dummyimage.com/189x100.png/5fa2dd/ffffff', 'ADMIN'),
(5, 'sbompas4@loc.gov', 'sbompas4', '123456', 'Simeon', 'Bompas', 'http://dummyimage.com/167x100.png/cc0000/ffffff', 'GOD'),
(6, 'vbremley5@networksolutions.com', 'vbremley5', '123456', 'Valentina', 'Bremley', 'http://dummyimage.com/176x100.png/ff4444/ffffff', 'ADMIN'),
(7, 'sgheorghe6@ehow.com', 'sgheorghe6', '123456', 'Stern', 'Gheorghe', 'http://dummyimage.com/182x100.png/5fa2dd/ffffff', 'GUEST'),
(8, 'mvel7@barnesandnoble.com', 'mvel7', '123456', 'Marcela', 'Vel', 'http://dummyimage.com/242x100.png/cc0000/ffffff', 'ADMIN'),
(9, 'lsperry8@nifty.com', 'lsperry8', '123456', 'Latisha', 'Sperry', 'http://dummyimage.com/166x100.png/ff4444/ffffff', 'GUEST'),
(10, 'swessell9@usgs.gov', 'swessell9', '123456', 'Stesha', 'Wessell', 'http://dummyimage.com/227x100.png/cc0000/ffffff', 'GOD'),
(11, 'bvescovoa@hud.gov', 'bvescovoa', '123456', 'Barty', 'Vescovo', 'http://dummyimage.com/174x100.png/dddddd/000000', 'ADMIN'),
(12, 'kpeppinb@dmoz.org', 'kpeppinb', '123456', 'Kristoforo', 'Peppin', 'http://dummyimage.com/245x100.png/5fa2dd/ffffff', 'GOD'),
(13, 'jdykinsc@omniture.com', 'jdykinsc', '123456', 'Jackson', 'Dykins', 'http://dummyimage.com/155x100.png/dddddd/000000', 'GUEST'),
(14, 'shentzed@creativecommons.org', 'shentzed', '123456', 'Silas', 'Hentze', 'http://dummyimage.com/243x100.png/dddddd/000000', 'GOD'),
(15, 'ndomeke@51.la', 'ndomeke', '123456', 'Naomi', 'Domek', 'http://dummyimage.com/142x100.png/ff4444/ffffff', 'ADMIN'),
(16, 'weakinf@webs.com', 'weakinf', '123456', 'Wildon', 'Eakin', 'http://dummyimage.com/185x100.png/cc0000/ffffff', 'GUEST'),
(17, 'ecrundeng@symantec.com', 'ecrundeng', '123456', 'Ellswerth', 'Crunden', 'http://dummyimage.com/123x100.png/5fa2dd/ffffff', 'ADMIN'),
(18, 'jstanboroughh@angelfire.com', 'jstanboroughh', '123456', 'Jeannette', 'Stanborough', 'http://dummyimage.com/137x100.png/ff4444/ffffff', 'GUEST'),
(19, 'pquartlyi@icio.us', 'pquartlyi', '123456', 'Pernell', 'Quartly', 'http://dummyimage.com/234x100.png/cc0000/ffffff', 'GUEST'),
(20, 'chyattj@godaddy.com', 'chyattj', '123456', 'Cariotta', 'Hyatt', 'http://dummyimage.com/163x100.png/5fa2dd/ffffff', 'GUEST');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`),
  ADD KEY `carts_fk0` (`user_id`) USING BTREE;

--
-- Indices de la tabla `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pictures`
--
ALTER TABLE `pictures`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pictures_fk0` (`product_id`) USING BTREE;

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_fk0` (`category_id`) USING BTREE;

--
-- Indices de la tabla `product_cart`
--
ALTER TABLE `product_cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_cart_fk0` (`cart_id`) USING BTREE,
  ADD KEY `product_cart_fk1` (`product_id`) USING BTREE;

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `category`
--
ALTER TABLE `category`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `pictures`
--
ALTER TABLE `pictures`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=327;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT de la tabla `product_cart`
--
ALTER TABLE `product_cart`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `pictures`
--
ALTER TABLE `pictures`
  ADD CONSTRAINT `pictures_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `product_cart`
--
ALTER TABLE `product_cart`
  ADD CONSTRAINT `product_cart_ibfk_83` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `product_cart_ibfk_84` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
