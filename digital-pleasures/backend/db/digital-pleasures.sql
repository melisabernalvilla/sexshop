-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-10-2023 a las 05:06:55
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `digital-pleasures`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id` int(11) NOT NULL,
  `id_usuario` varchar(40) NOT NULL,
  `id_productos` int(11) NOT NULL,
  `cantidadProductos` int(11) NOT NULL,
  `precioTotalArticulo` int(11) NOT NULL,
  `precioTotal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `id_usuario` varchar(40) NOT NULL,
  `id_productos` int(11) NOT NULL,
  `comentario` text NOT NULL,
  `calificacion` int(1) NOT NULL,
  `fechacomentario` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `titulo` varchar(35) NOT NULL,
  `descripcion` text NOT NULL,
  `precio` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `categorias` varchar(70) NOT NULL,
  `oferta` tinyint(1) NOT NULL,
  `img` varchar(60) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `titulo`, `descripcion`, `precio`, `stock`, `categorias`, `oferta`, `img`, `fecha`) VALUES
(1, 'Conjunto enfermera', 'Prepárate para explorar tus fantasías más atrevidas con nuestro Conjunto Enfermera Seductora. Este conjunto sexy y coqueto está diseñado para elevar la temperatura de tus momentos íntimos. Ya sea para un juego de roles picante o simplemente para sorprender a tu pareja, este conjunto te hará sentir poderosa y irresistible.\r\n\r\nEl Conjunto Enfermera incluye una provocativa bata de encaje semitransparente que se abrocha en la parte delantera con cintas satinadas, revelando tu figura de manera tentadora. Complementado con un sujetador de triángulo de encaje y una tanga a juego, este conjunto resalta tus curvas de la manera más sensual.', 7260, 40, '2', 0, 'disfraz.webp', '2021-11-11'),
(2, 'Conjunto Brenda', 'El Conjunto Brenda es la elección perfecta para una noche de seducción y elegancia. Este conjunto encarna la combinación ideal entre sofisticación y sensualidad, diseñado para realzar tu belleza y cautivar a tu pareja.\r\n\r\nEl Conjunto Brenda incluye una deslumbrante bata de encaje que acaricia suavemente tu piel, con detalles intrincados y una silueta elegante. Complementado con un sujetador a juego y una tanga de encaje, este conjunto te hará sentir irresistible y deseada.', 7999, 55, '1', 1, 'conjunto brenda.webp', '2022-12-07'),
(3, 'Masajeador Pato Relax & Placer', 'El Masajeador Pato Relax & Placer es mucho más que un juguete. Es un compañero de viaje hacia momentos de relajación y placer inigualables. Diseñado con una forma juguetona y encantadora, este masajeador te ofrece una experiencia única de bienestar y estimulación.', 3970, 188, '3', 0, 'estimulador.webp', '2023-03-06'),
(4, 'Kit Fetish Pasión Prohibida', 'El Kit Fetish Pasión Prohibida es la puerta de entrada a un mundo de excitación y exploración sexual sin límites. Diseñado para parejas que buscan intensificar su intimidad y descubrir nuevas dimensiones del placer, este kit es una invitación a dejar volar la imaginación y satisfacer los deseos más profundos.\n', 6500, 64, '4', 1, 'kit fetish.webp', '2019-04-08'),
(5, '123', 'asd', 1234, 0, '1', 1, 'asd', '0000-00-00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` varchar(40) NOT NULL,
  `nombre` varchar(25) NOT NULL,
  `apellido` varchar(25) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `paisNacimiento` varchar(25) NOT NULL,
  `email` varchar(70) NOT NULL,
  `password` varchar(70) NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT 0,
  `img` varchar(70) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `fechaNacimiento`, `paisNacimiento`, `email`, `password`, `admin`, `img`) VALUES
('06f59f2b-adfe-4c87-bc46-9c94f15fd07f', 'Paolo', 'Rossi', '1999-10-11', 'Argentina', 'PaoloRossi@hotmail.com', 'noexisto', 0, 'Rossi.png'),
('7cbf3482-f2e2-4c73-8503-f7622c4627f4', 'Carla', 'Rodriguez', '1980-03-09', 'Chile', 'rodriguezcar@gmail.com', '123456', 0, 'carla.webp');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_carrito_usuario` (`id_usuario`),
  ADD KEY `fk_carrito_productos` (`id_productos`);

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_productos` (`id_productos`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `fk_carrito_productos` FOREIGN KEY (`id_productos`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `fk_carrito_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`id_productos`) REFERENCES `productos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
