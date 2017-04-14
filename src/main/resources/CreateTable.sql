CREATE TABLE `NewTable` (
`PraiseRecordId`  int(11) NOT NULL AUTO_INCREMENT COMMENT '点赞记录id' ,
`SpeechId`  int(11) NOT NULL COMMENT '言论id' ,
`UserId`  int(11) NOT NULL COMMENT '点赞人id' ,
`CreateTime`  datetime NOT NULL COMMENT '点赞时间' ,
PRIMARY KEY (`PraiseRecordId`)
)
;