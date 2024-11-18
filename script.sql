create database db_insf;
use db_insf;

create table tb_contatos(
id_contatos int primary key auto_increment,
ds_titulo varchar(60),
ds_informacoes varchar(500),
ds_impacto varchar(20),
dt_ocorrencia date,
ds_atribuir varchar(100)
);