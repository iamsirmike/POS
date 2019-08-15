-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 15, 2019 at 11:20 AM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `posales`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `username` varchar(24) NOT NULL,
  `password` varchar(12) NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `middlename` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `borrowing`
--

CREATE TABLE `borrowing` (
  `borrow_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `student_no` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `date` date NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(4, 'Antibiotics'),
(5, 'Antibiotic-Vitamins'),
(6, 'Dewormers'),
(7, 'Vitamins'),
(8, 'Coccidiostats'),
(9, 'Injectables'),
(10, 'Pour On / Ectoparasiticide'),
(11, 'Antistress'),
(12, 'Disinfectants');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customer_id` int(11) NOT NULL,
  `customer_name` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `contact` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `city` varchar(550) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`, `customer_name`, `address`, `contact`, `email`, `city`) VALUES
(1, 'Michal Asamoah', 'box 233', '0548971277', 'asamoahmichael77@gmail.com', 'Kumasi'),
(2, 'Michal Asamoah', 'box 233', '0548971277', 'asamoahmichael77@gmail.com', 'Kumasi'),
(3, 'koo nie', 'box 233', '0548971277', 'asamoahmichael77@gmail.com', 'Digha'),
(4, 'Michal Asamoah', 'box 233', '0548971277', 'asamoahmichael77@gmail.com', 'Kumasi'),
(5, 'Michal Asamoah', 'box 233', '0548971277', 'asamoahmichael77@gmail.com', 'Kumasi'),
(6, 'Michal Asamoah', 'box 233', '0548971277', 'asamoahmichael77@gmail.com', 'Kumasi'),
(7, 'koo nie', 'box 233', '0548971277', 'asamoahmichael77@gmail.com', 'Digha'),
(8, 'koo nie', 'box 233', '0548971277', 'asamoahmichael77@gmail.com', 'Digha'),
(9, 'Michal Asamoah', 'box 233', '0548971277', 'asamoahmichael77@gmail.com', 'Kumasi'),
(10, 'Michal Asamoah', 'box 233', '0548971277', 'asamoahmichael77@gmail.com', 'Kumasi'),
(11, 'Michal Asamoah', 'box 233', '0548971277', 'asamoahmichael77@gmail.com', 'Kumasi'),
(12, 'koo nie', 'box 233', '0548971277', 'asamoahmichael77@gmail.com', 'Digha');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_code` varchar(200) NOT NULL,
  `category` varchar(200) NOT NULL,
  `product_name` varchar(200) NOT NULL,
  `cost` varchar(100) NOT NULL,
  `o_price` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL,
  `profit` varchar(100) NOT NULL,
  `supplier` varchar(100) NOT NULL,
  `onhand_qty` int(10) NOT NULL,
  `qty` int(10) NOT NULL,
  `qty_sold` int(10) NOT NULL,
  `expiry_date` varchar(500) NOT NULL,
  `date_arrival` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_code`, `category`, `product_name`, `cost`, `o_price`, `price`, `profit`, `supplier`, `onhand_qty`, `qty`, `qty_sold`, `expiry_date`, `date_arrival`) VALUES
(1, 'RBH-cfae', 'Antibiotics', 'Fridges', '', '90', '100', '10', 'Michael Asamoah', 0, 700, 700, '2019-07-30', '2019-07-11'),
(2, 'RBH-e1bf', 'Vitamins', 'laptops', '', '90', '100', '10', 'Michael Asamoah', 0, 95, 100, '2019-07-31', '2019-07-18'),
(3, 'RBH-f0c7', 'Dewormers', 'Phones', '', '90', '130', '40', 'Michael Asamoah', 0, 798, 800, '2019-08-31', '2019-08-09'),
(7, 'RBH-500e', 'Pour On / Ectoparasiticide', 'Televisions', '', '15', '90', '75', 'Thaslima', 0, 340, 340, '2019-08-30', '2019-08-14');

-- --------------------------------------------------------

--
-- Table structure for table `purchases`
--

CREATE TABLE `purchases` (
  `transaction_id` int(11) NOT NULL,
  `invoice_number` varchar(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  `suplier` varchar(100) NOT NULL,
  `remarks` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `purchases_item`
--

CREATE TABLE `purchases_item` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `qty` int(11) NOT NULL,
  `cost` varchar(100) NOT NULL,
  `invoice` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `transaction_id` int(11) NOT NULL,
  `invoice_number` varchar(100) NOT NULL,
  `cashier` varchar(100) NOT NULL,
  `date` varchar(50) NOT NULL,
  `type` varchar(100) NOT NULL,
  `amount` varchar(100) NOT NULL,
  `profit` varchar(100) NOT NULL,
  `due_date` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `balance` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`transaction_id`, `invoice_number`, `cashier`, `date`, `type`, `amount`, `profit`, `due_date`, `name`, `balance`) VALUES
(1, '', 'demo', '0000-00-00', 'cash', '300', '30', '300', 'MikelAsamoah', ''),
(2, 'RS-032220', 'demo', '0000-00-00', 'cash', '100', '10', '100', 'iniesta', ''),
(3, '', 'demo', '0000-00-00', 'cash', '600', '60', '600', 'thas', ''),
(4, 'RS-3202424', 'demo', '0000-00-00', 'cash', '100', '10', '100', 'mlkj;lk', ''),
(5, 'RS-2023600', 'demo', '2019-08-14', 'cash', '100', '10', '100', 'fsf', ''),
(6, 'RS-5033333', 'demo', '0000-00-00', 'cash', '100', '10', '100', 'kkkkkkk', ''),
(7, '', 'demo', '08/14/19', 'cash', '400', '40', '400', 'tttttt', ''),
(8, 'RS-250303', 'demo', '08/14/19', 'cash', '200', '20', '200', 'dddddd', ''),
(9, '', 'demo', '08/14/19', 'cash', '100', '10', '100', 'ghghg', ''),
(10, '', 'demo', '08/14/19', 'cash', '390', '120', '390', 'no lie', ''),
(11, '', 'demo', '08/14/19', 'cash', '90', '75', '90', 'dsfs', ''),
(12, '', 'demo', '08/14/19', 'cash', '360', '300', '360', 'dsfsf', '');

-- --------------------------------------------------------

--
-- Table structure for table `sales_order`
--

CREATE TABLE `sales_order` (
  `transaction_id` int(11) NOT NULL,
  `invoice` varchar(100) NOT NULL,
  `product` varchar(100) NOT NULL,
  `qty` varchar(100) NOT NULL,
  `amount` varchar(100) NOT NULL,
  `profit` varchar(100) NOT NULL,
  `product_code` varchar(150) NOT NULL,
  `category` varchar(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `price` varchar(100) NOT NULL,
  `date_bought` date DEFAULT NULL,
  `discount` varchar(100) NOT NULL,
  `date` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sales_order`
--

INSERT INTO `sales_order` (`transaction_id`, `invoice`, `product`, `qty`, `amount`, `profit`, `product_code`, `category`, `name`, `price`, `date_bought`, `discount`, `date`) VALUES
(5, 'RS-032220', '3', '1', '100', '10', 'RBH-f0c7', 'Dewormers', 'Michael Asamoah', '100', '2019-08-14', '', '08/14/2019'),
(7, 'RS-3202424', '2', '1', '100', '10', 'RBH-e1bf', 'Vitamins', 'Yaa', '100', '2019-08-14', '', ''),
(8, 'RS-2023600', '2', '1', '100', '10', 'RBH-e1bf', 'Vitamins', 'Yaa', '100', '2019-08-14', '', '2019-08-14'),
(9, 'RS-5033333', '2', '1', '100', '10', 'RBH-e1bf', 'Vitamins', 'Yaa', '100', '2019-08-14', '', '08/14/2019'),
(11, 'RS-250303', '2', '2', '200', '20', 'RBH-e1bf', 'Vitamins', 'Yaa', '100', '2019-08-14', '', '08/14/2019'),
(17, '', '5', '4', '360', '300', 'RBH-c9e4', 'Antibiotic-Vitamins', 'premium', '90', '2019-08-14', '', '08/14/2019');

-- --------------------------------------------------------

--
-- Table structure for table `sales_orderSaved`
--

CREATE TABLE `sales_orderSaved` (
  `transaction_id` int(11) NOT NULL,
  `invoice` varchar(100) NOT NULL,
  `product` varchar(100) NOT NULL,
  `qty` varchar(100) NOT NULL,
  `amount` varchar(100) NOT NULL,
  `profit` varchar(100) NOT NULL,
  `product_code` varchar(150) NOT NULL,
  `category` varchar(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `price` varchar(100) NOT NULL,
  `date_bought` date DEFAULT NULL,
  `discount` varchar(100) NOT NULL,
  `date` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sales_orderSaved`
--

INSERT INTO `sales_orderSaved` (`transaction_id`, `invoice`, `product`, `qty`, `amount`, `profit`, `product_code`, `category`, `name`, `price`, `date_bought`, `discount`, `date`) VALUES
(2, '', '1', '1', '100', '10', 'RBH-cfae', 'Antibiotics', 'lion     ', '100', '2019-08-14', '', '08/14/2019'),
(3, '', '3', '3', '300', '30', 'RBH-f0c7', 'Dewormers', 'Michael Asamoah', '100', '2019-08-14', '', '08/14/2019'),
(4, '', '2', '3', '300', '30', 'RBH-e1bf', 'Vitamins', 'Yaa', '100', '2019-08-14', '', '08/14/2019'),
(5, 'RS-032220', '3', '1', '100', '10', 'RBH-f0c7', 'Dewormers', 'Michael Asamoah', '100', '2019-08-14', '', '08/14/2019'),
(6, '', '2', '3', '300', '30', 'RBH-e1bf', 'Vitamins', 'Yaa', '100', '2019-08-14', '', '08/14/2019'),
(7, 'RS-3202424', '2', '1', '100', '10', 'RBH-e1bf', 'Vitamins', 'Yaa', '100', '2019-08-14', '', ''),
(8, 'RS-2023600', '2', '1', '100', '10', 'RBH-e1bf', 'Vitamins', 'Yaa', '100', '2019-03-14', '', '2019-08-14'),
(9, 'RS-5033333', '2', '1', '100', '10', 'RBH-e1bf', 'Vitamins', 'Yaa', '100', '2019-07-14', '', '08/14/2019'),
(10, '', '2', '4', '400', '40', 'RBH-e1bf', 'Vitamins', 'Yaa', '100', '2019-07-14', '', '08/14/2019'),
(11, 'RS-250303', '2', '2', '200', '20', 'RBH-e1bf', 'Vitamins', 'Yaa', '100', '2019-03-14', '', '08/14/2019'),
(12, '', '3', '1', '100', '10', 'RBH-f0c7', 'Dewormers', 'Michael Asamoah', '100', '2019-02-14', '', '08/14/2019'),
(13, '', '3', '5', '500', '50', 'RBH-f0c7', 'Dewormers', 'Michael Asamoah', '100', '2019-08-14', '', '08/14/2019'),
(14, '', '2', '3', '300', '30', 'RBH-e1bf', 'Vitamins', 'Yaa', '100', '2019-08-14', '', '08/14/2019'),
(15, '', '3', '3', '390', '120', 'RBH-f0c7', 'Dewormers', 'Michael Asamoah ', '130', '2019-08-14', '', '08/14/2019'),
(16, '', '5', '1', '90', '75', 'RBH-c9e4', 'Antibiotic-Vitamins', 'premium', '90', '2019-08-14', '', '08/14/2019'),
(17, '', '5', '4', '360', '300', 'RBH-c9e4', 'Antibiotic-Vitamins', 'premium', '90', '2019-08-14', '', '08/14/2019');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `student_id` int(11) NOT NULL,
  `student_no` varchar(8) NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `middlename` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `course` varchar(8) NOT NULL,
  `section` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `supliers`
--

CREATE TABLE `supliers` (
  `suplier_id` int(11) NOT NULL,
  `suplier_name` varchar(100) NOT NULL,
  `suplier_address` varchar(100) NOT NULL,
  `suplier_contact` varchar(100) NOT NULL,
  `contact_person` varchar(100) NOT NULL,
  `note` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `supliers`
--

INSERT INTO `supliers` (`suplier_id`, `suplier_name`, `suplier_address`, `suplier_contact`, `contact_person`, `note`) VALUES
(1, 'Michael Asamoah', 'box 456', '0207834674', 'mike', ''),
(2, 'Thaslima', 'box 233', '0548971277', 'Michael', ''),
(3, '3ETECHINN', 'box 233', '0548971277', 'Michael', ''),
(4, 'AG', 'box 233', '0548971277', 'Michael', ''),
(5, 'premium', 'box 233', '0548971277', 'Michael', ''),
(6, 'Michael Asamoah', 'box 233', '0548971277', 'Michael', '');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `position` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `name`, `position`) VALUES
(7, 'demo', 'demo', 'demo', 'admin'),
(8, 'cahsier', 'cashier', 'cashier', 'Cashier'),
(9, 'receptionist', 'receptionist', 'receptionist', 'receptionist');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `borrowing`
--
ALTER TABLE `borrowing`
  ADD PRIMARY KEY (`borrow_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`transaction_id`);

--
-- Indexes for table `purchases_item`
--
ALTER TABLE `purchases_item`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`transaction_id`);

--
-- Indexes for table `sales_order`
--
ALTER TABLE `sales_order`
  ADD PRIMARY KEY (`transaction_id`);

--
-- Indexes for table `sales_orderSaved`
--
ALTER TABLE `sales_orderSaved`
  ADD PRIMARY KEY (`transaction_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`student_id`);

--
-- Indexes for table `supliers`
--
ALTER TABLE `supliers`
  ADD PRIMARY KEY (`suplier_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `borrowing`
--
ALTER TABLE `borrowing`
  MODIFY `borrow_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `purchases`
--
ALTER TABLE `purchases`
  MODIFY `transaction_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `purchases_item`
--
ALTER TABLE `purchases_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `transaction_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `sales_order`
--
ALTER TABLE `sales_order`
  MODIFY `transaction_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `sales_orderSaved`
--
ALTER TABLE `sales_orderSaved`
  MODIFY `transaction_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `supliers`
--
ALTER TABLE `supliers`
  MODIFY `suplier_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
