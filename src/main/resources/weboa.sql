/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50528
Source Host           : localhost:3306
Source Database       : weboa

Target Server Type    : MYSQL
Target Server Version : 50528
File Encoding         : 65001

Date: 2017-04-17 23:26:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `attends`
-- ----------------------------
DROP TABLE IF EXISTS `attends`;
CREATE TABLE `attends` (
  `AttendId` int(11) NOT NULL AUTO_INCREMENT,
  `AttendUser` int(11) NOT NULL,
  `AttendDate` date NOT NULL,
  `StartTime` datetime DEFAULT NULL,
  `EndTime` datetime DEFAULT NULL,
  `AttendRemark` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`AttendId`),
  KEY `attend_user` (`AttendUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of attends
-- ----------------------------

-- ----------------------------
-- Table structure for `comments`
-- ----------------------------
DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `CommentId` int(4) NOT NULL AUTO_INCREMENT COMMENT '评论编号(设置为主码，自动增长编号)',
  `Context` text COLLATE utf8_unicode_ci NOT NULL COMMENT '评论内容',
  `CreateTime` datetime NOT NULL COMMENT '评论发表时间',
  `UserId` int(11) NOT NULL COMMENT '发表评论的UserId',
  `SpeechId` int(11) NOT NULL COMMENT '被评论的言论编号',
  PRIMARY KEY (`CommentId`),
  KEY `comment_user` (`UserId`),
  KEY `comment_speech` (`SpeechId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of comments
-- ----------------------------
INSERT INTO `comments` VALUES ('1', '你这说的什么啊', '2017-04-15 12:10:36', '9', '1');
INSERT INTO `comments` VALUES ('2', '这是第二条评论', '2017-04-15 13:40:36', '9', '1');
INSERT INTO `comments` VALUES ('3', '哈哈哈哈', '2017-04-15 14:07:29', '10', '1');
INSERT INTO `comments` VALUES ('4', '哈哈哈哈', '2017-04-15 14:08:17', '10', '1');
INSERT INTO `comments` VALUES ('5', '哈哈哈哈', '2017-04-15 14:08:20', '10', '1');
INSERT INTO `comments` VALUES ('6', '清空', '2017-04-15 14:15:25', '9', '1');
INSERT INTO `comments` VALUES ('7', '清空操作', '2017-04-15 14:15:47', '9', '1');
INSERT INTO `comments` VALUES ('8', '啊啊啊', '2017-04-15 14:16:12', '9', '1');
INSERT INTO `comments` VALUES ('9', '33', '2017-04-15 14:17:59', '9', '1');

-- ----------------------------
-- Table structure for `depts`
-- ----------------------------
DROP TABLE IF EXISTS `depts`;
CREATE TABLE `depts` (
  `DeptId` int(11) NOT NULL AUTO_INCREMENT,
  `DeptName` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `DeptRemark` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `DeptHeader` int(11) NOT NULL,
  PRIMARY KEY (`DeptId`)
) ENGINE=InnoDB AUTO_INCREMENT=1004 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of depts
-- ----------------------------
INSERT INTO `depts` VALUES ('1001', '研发部', null, '12');
INSERT INTO `depts` VALUES ('1002', '数据部', '我只是一个备注', '10');
INSERT INTO `depts` VALUES ('1003', '测试部', '负责测试', '9');

-- ----------------------------
-- Table structure for `notices`
-- ----------------------------
DROP TABLE IF EXISTS `notices`;
CREATE TABLE `notices` (
  `NoticeId` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `NoticeTitle` varchar(20) COLLATE utf8_unicode_ci NOT NULL COMMENT '标题',
  `NoticeContext` varchar(500) COLLATE utf8_unicode_ci NOT NULL COMMENT '内容',
  `NoticeType` tinyint(2) NOT NULL COMMENT '类型',
  `CreateTime` datetime NOT NULL COMMENT '创建时间',
  `CreateUser` int(11) NOT NULL COMMENT '创建人id',
  PRIMARY KEY (`NoticeId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of notices
-- ----------------------------
INSERT INTO `notices` VALUES ('1', '会议通知', '说了再见是否就能不再想念 \r\n说了抱歉是否就能理解一切 \r\n眼泪代替你亲吻我的脸 \r\n我的世界忽然冰天白雪 \r\n五指之间还残留你的昨天 \r\n一片一片怎么拼贴完全 \r\n七月七日晴 \r\n忽然下起了大雪 \r\n不敢睁开眼希望是我的幻觉 \r\n我站在地球边眼睁睁看着雪 \r\n覆盖你来的那条街 \r\n七月七日晴 \r\n黑夜忽然变白天 \r\n我失去知觉看着相爱的极限 \r\n我望着地平线天空无际无边 \r\n听不见你道别 \r\n五指之间还残留你的昨天 \r\n一片一片怎么拼贴完全 \r\n七月七日晴 \r\n忽然下起了大雪 \r\n不敢睁开眼希望是我的幻觉 \r\n我站在地球边眼睁睁看着雪 \r\n覆盖你来的那条街 \r\n七月七日晴 \r\n黑夜忽然变白天 \r\n我失去知觉看着相爱的极限 \r\n我望着地平线天空无际无边 \r\n听不见你道别 \r\n七月七日晴 \r\n忽然下起了大雪 \r\n不敢睁开眼希望是我的幻觉 \r\n我站在地球边眼睁睁看着雪 \r\n覆盖你来的那条街 \r\n七月七日晴 \r\n我失去知觉 \r\n天空无际无边', '1', '2017-04-16 17:28:12', '12');
INSERT INTO `notices` VALUES ('2', '公司公告', '园区班车路线更改公告', '2', '2017-04-16 17:56:11', '10');
INSERT INTO `notices` VALUES ('3', '庐州月', '儿时凿壁偷了谁家的光\n宿昔不梳 一苦十年寒窗\n如今灯下闲读 红袖添香\n半生浮名只是虚妄\n三月 一路烟霞 莺飞草长\n柳絮纷飞里看见了故乡\n不知心上的你是否还在庐阳\n一缕青丝一生珍藏\n桥上的恋人入对出双\n桥边红药叹夜太漫长\n月也摇晃 人也彷徨\n乌蓬里传来了一曲离殇\n庐州月光 洒在心上\n月下的你不复当年模样\n太多的伤 难诉衷肠\n叹一句当时只道是寻常\n庐州月光 梨花雨凉\n如今的你又在谁的身旁\n家乡月光 深深烙在我心上\n却流不出当年泪光\n三月 一路烟霞 莺飞草长\n柳絮纷飞里看见了故乡\n不知心上的你是否还在庐阳\n一缕青丝一生珍藏\n桥上的恋人入对出双\n桥边红药叹夜太漫长\n月也摇晃 人也彷徨\n乌蓬里传来了一曲离殇\n庐州月光 洒在心上\n月下的你不复当年模样\n太多的伤 难诉衷肠\n叹一句当时只道是寻常\n庐州月光 梨花雨凉\n如今的你又在谁的身旁\n家乡月光 深深烙在我心上\n却流不出当年泪光\n庐州的月光 在我心上\n太多的伤 难诉衷肠\n如今的你又在谁的身旁\n我却流不出当年泪光\n庐州月光 洒在心上\n月下的你不复当年模样\n太多的伤 难诉', '1', '2017-04-16 21:03:54', '10');
INSERT INTO `notices` VALUES ('4', '放假公告', '说了再见是否就能不再想念 \n 说了抱歉是否就能理解一切 \n 眼泪代替你亲吻我的脸 \n 我的世界忽然冰天白雪 \n 五指之间还残留你的昨天 \n 一片一片怎么拼贴完全 \n 七月七日晴 \n 忽然下起了大雪 \n 不敢睁开眼希望是我的幻觉 \n 我站在地球边眼睁睁看着雪 \n 覆盖你来的那条街 \n 七月七日晴 \n 黑夜忽然变白天 \n 我失去知觉看着相爱的极限 \n 我望着地平线天空无际无边 \n 听不见你道别 \n 五指之间还残留你的昨天 \n 一片一片怎么拼贴完全 \n 七月七日晴 \n 忽然下起了大雪 \n 不敢睁开眼希望是我的幻觉 \n 我站在地球边眼睁睁看着雪 \n 覆盖你来的那条街 \n 七月七日晴 \n 黑夜忽然变白天 \n 我失去知觉看着相爱的极限 \n 我望着地平线天空无际无边 \n 听不见你道别 \n 七月七日晴 \n 忽然下起了大雪 \n 不敢睁开眼希望是我的幻觉 \n 我站在地球边眼睁睁看着雪 \n 覆盖你来的那条街 \n 七月七日晴 \n 我失去知觉 \n 天空无际无边', '2', '2017-04-17 19:22:38', '9');

-- ----------------------------
-- Table structure for `permits`
-- ----------------------------
DROP TABLE IF EXISTS `permits`;
CREATE TABLE `permits` (
  `PermitId` int(11) NOT NULL AUTO_INCREMENT,
  `PermitTitle` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `PermitContext` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `SubmitUser` int(11) NOT NULL,
  `SubmitTime` datetime NOT NULL,
  `PermitState` tinyint(2) NOT NULL COMMENT '1待审核2已通过3未通过',
  `HandleTime` datetime DEFAULT NULL,
  `HandleUser` int(11) DEFAULT NULL,
  `HandleRemark` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`PermitId`),
  KEY `permit_user` (`SubmitUser`),
  KEY `handle_user` (`HandleUser`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of permits
-- ----------------------------
INSERT INTO `permits` VALUES ('1', '申请加工资', '不加工资，就罢工', '9', '2017-04-17 20:59:52', '3', '2017-04-17 22:25:30', '9', '不同意');

-- ----------------------------
-- Table structure for `posts`
-- ----------------------------
DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts` (
  `PostId` int(11) NOT NULL AUTO_INCREMENT,
  `PostName` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `PostRemark` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `DeptId` int(11) NOT NULL,
  PRIMARY KEY (`PostId`),
  KEY `post_dept` (`DeptId`)
) ENGINE=InnoDB AUTO_INCREMENT=100105 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of posts
-- ----------------------------
INSERT INTO `posts` VALUES ('100101', 'java研发', '这只是一个备注而已', '1001');
INSERT INTO `posts` VALUES ('100102', '.net研发', null, '1001');
INSERT INTO `posts` VALUES ('100103', 'C++开发', null, '1001');
INSERT INTO `posts` VALUES ('100104', 'web前端', '负责公司前端页面的开发', '1001');

-- ----------------------------
-- Table structure for `praiserecords`
-- ----------------------------
DROP TABLE IF EXISTS `praiserecords`;
CREATE TABLE `praiserecords` (
  `PraiseRecordId` int(11) NOT NULL AUTO_INCREMENT COMMENT '点赞记录id',
  `SpeechId` int(11) NOT NULL COMMENT '言论id',
  `UserId` int(11) NOT NULL COMMENT '点赞人id',
  `CreateTime` datetime NOT NULL COMMENT '点赞时间',
  PRIMARY KEY (`PraiseRecordId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of praiserecords
-- ----------------------------
INSERT INTO `praiserecords` VALUES ('2', '1', '9', '2017-04-15 00:17:49');
INSERT INTO `praiserecords` VALUES ('3', '1', '10', '2017-04-15 00:56:50');
INSERT INTO `praiserecords` VALUES ('4', '1', '11', '2017-04-15 14:11:38');
INSERT INTO `praiserecords` VALUES ('5', '2', '12', '2017-04-15 16:06:44');
INSERT INTO `praiserecords` VALUES ('6', '1', '12', '2017-04-15 16:40:06');
INSERT INTO `praiserecords` VALUES ('7', '2', '9', '2017-04-16 20:41:31');

-- ----------------------------
-- Table structure for `speechs`
-- ----------------------------
DROP TABLE IF EXISTS `speechs`;
CREATE TABLE `speechs` (
  `SpeechId` int(11) NOT NULL AUTO_INCREMENT,
  `Title` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '言论标题',
  `Context` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '言论内容',
  `CreateTime` datetime NOT NULL COMMENT '言论发表时间',
  `CreateUser` int(11) NOT NULL COMMENT '发表言论人的工号',
  `PraiseNum` int(4) DEFAULT '0',
  PRIMARY KEY (`SpeechId`),
  KEY `speech_user` (`CreateUser`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of speechs
-- ----------------------------
INSERT INTO `speechs` VALUES ('1', '标题', '今天周五了，放假了安居房不可断绝是否能就是打开不规范等数据库觉得你第三方接口功能空间都是给你发的送给你看你是个可是你发的上课了你说地方刚开始的方法给你开始发给你你就是的法规考试都能发光的首付款尼克斯刚开始都发给你的数据库给你耐腐蚀贷款公司都发给你的首付款佛is工号hi肉价格南通如皋个我而韩国个我如果提偶尔我特温柔日记', '2017-04-14 20:28:08', '9', '4');
INSERT INTO `speechs` VALUES ('2', '羞答答的玫瑰静悄悄的开', '羞答答的玫瑰静悄悄地开\n《谁的眼泪在飞》专辑封面\n《谁的眼泪在飞》专辑封面\n慢慢地绽放她留给我的情怀\n春天的手呀翻阅她的等待\n我在暗暗思量该不该将她轻轻地摘\n羞答答的玫瑰静悄悄地开\n慢慢地燃烧她不承认的情怀\n清风的手呀试探她的等待\n我在暗暗犹豫该不该将她轻轻地摘\n怎么舍得如此接受你的爱\n从来喜欢都会被爱成悲哀\nVCD专辑《改变》第一盘的封面\nVCD专辑《改变》第一盘的封面\n怎么舍得如此揽你入胸怀\n当我越是深爱脾气就会越坏\n羞答答的玫瑰静悄悄地开\n慢慢地同时凋零同时盛开\n爱情的手呀抚过她的等待\n我在暗暗惆怅竟不曾将她轻轻地摘', '2017-04-15 16:06:27', '12', '2');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `UserId` int(11) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `UserSex` tinyint(2) NOT NULL COMMENT '1代表男2代表女',
  `UserBirth` date NOT NULL,
  `UserAddr` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `UserTel` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `UserPassword` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `UserPower` tinyint(2) NOT NULL COMMENT '1超级管理员2部门主管3普通人员',
  `PostId` int(11) NOT NULL,
  `State` tinyint(2) NOT NULL COMMENT '1(启用)，2(停用)',
  `UserEmail` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '邮箱',
  `IdCardNO` varchar(20) COLLATE utf8_unicode_ci NOT NULL COMMENT '身份证号',
  PRIMARY KEY (`UserId`),
  KEY `user_post` (`PostId`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('9', '管理员', '1', '2017-01-15', '湖北黄冈', '123', '123', '3', '100101', '1', null, '');
INSERT INTO `users` VALUES ('10', '刘志豪', '1', '1993-08-17', '碧桂园小区', '13467589876', '589876', '1', '100104', '1', null, '');
INSERT INTO `users` VALUES ('11', '丹姐', '2', '1995-08-16', '软件新城', '15927307349', '307349', '1', '100101', '1', null, '');
INSERT INTO `users` VALUES ('12', '夏阳', '1', '1993-09-05', '光谷碧桂园', '15671786729', '786729', '2', '100101', '1', null, '');
INSERT INTO `users` VALUES ('13', '涂帅', '1', '1994-07-07', '碧桂园小区', '15527463142', '463142', '1', '100101', '1', '15527463142@163.com', '421181199309059196');
