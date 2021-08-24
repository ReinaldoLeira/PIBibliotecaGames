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
-- Table structure for table `jogos`
--

DROP TABLE IF EXISTS `jogos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jogos` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nome` varchar(120) NOT NULL,
  `desenvolvedor` varchar(120) NOT NULL,
  `descricao` varchar(500) NOT NULL,
  `lancamento` varchar(10) NOT NULL,
  `capa` varchar(500) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `validado` tinyint(1) NOT NULL,
  `createdBy` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `nome_UNIQUE` (`nome`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jogos`
--

LOCK TABLES `jogos` WRITE;
/*!40000 ALTER TABLE `jogos` DISABLE KEYS */;
INSERT INTO `jogos` VALUES (2,'Super Smash Bros. Ultimate','Sora Ltd., BANDAI NAMCO Studios, Nintendo Entertainment Planning & Development','Super Smash Bros. Ultimate, chamado no Japão de Super Smash Bros. Special, é um jogo eletrônico de luta da série Super Smash Bros. desenvolvido pela Bandai Namco Studios e Sora Ltd. e publicado pela Nintendo. Foi lançado para Nintendo Switch em 7 de dezembro de 2018.','7/12/2018','https://images-na.ssl-images-amazon.com/images/I/81aJ-R4E6gL._AC_SL1500_.jpg','2021-07-28 00:07:03','2021-07-28 00:07:03',1,1),(3,'Horizon Zero Dawn','Guerrilla Games','Horizon Zero Dawn é um eletrônico de ação em que os jogadores controlam Aloy, uma caçadora e arqueira, à medida que ela progride através de um mundo pós-apocalíptico, dominado por criaturas mecanizadas como robôs dinossauros.[3] Os componentes destas criaturas, como a electricidade e o metal, são vitais para Aloy sobreviver, sendo que ela tem de revistar os cadáveres destas criaturas em busca de recursos.','28/02/2017','https://cdn.awsli.com.br/1000x1000/53/53761/produto/23837650/0d4d94f7ea.jpg','2021-07-28 00:07:03','2021-07-28 00:07:03',1,2),(4,'The Legend of Zelda: Breath of the Wild','Nintendo','The Legend of Zelda: Breath of the Wild é um jogo eletrônico de ação-aventura desenvolvido pela Nintendo Entertainment Planning & Development e publicado pela Nintendo. É o décimo nono título da série The Legend of Zelda e foi lançado mundialmente para Wii U e Nintendo Switch em 3 de março de 2017.','03/03/2017','https://literaturaempauta.com.br/wp-content/uploads/2018/01/Breath-of-the-Wild-Capa-do-Jogo.jpg','2021-07-28 00:07:03','2021-07-28 00:07:03',0,1),(5,'Among Us','InnerSloth, PlayEveryWare','O jogo se passa em um cenário de tema espacial, onde cada jogador desempenha um de dois papéis, sendo a maioria tripulantes e um número predeterminado sendo impostores.[d] O objetivo dos tripulantes é identificar os impostores e/ou completar as tarefas ao redor do mapa, enquanto o objetivo dos impostores é eliminar os tripulantes.','15/06/2018','https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_AmongUs.jpg','2021-07-28 00:07:03','2021-07-28 00:07:03',0,2),(6,'Watch Dogs 2','activision','Watch_Dogs 2 é ambientado na baía de São Francisco e se desenrola sob a pele de Marcus Holloway, um hacker que foi vítima dos algoritmos de previsão de crime do ctOS 2.0 e acusado injustamente de um delito que não cometeu. Agora, ele pretende desligar o sistema de uma vez por todas, e para isso deverá usar todo o seu conhecimento para invadir tanto a rede que controla a infraestrutura da cidade quanto os dispositivos de seus moradores, permitindo que ele tenha total poder sobre drones, carros, p','15/11/2016','https://m.media-amazon.com/images/I/817C-S1NinL._AC_UL320_.jpg','2021-08-21 15:38:05','2021-08-21 15:38:05',0,1),(7,'Sonic Mania','sega','Após os eventos de Sonic & Knuckles e Sonic Generations, Sonic e Tails recebem uma poderosa leitura de energia da Angel Island (Ilha dos Anjos em português) e embarcam no avião de Sonic, o Tornado, para investigar. No entanto, o Dr.Eggman enviou um grupo de elite de robôs, os Hard-Boiled Heavies, para chegar primeiro ao sinal. Sonic e Tails chegam exatamente no momento em que Heavies estavam escavando a fonte do sinal, uma pedra preciosa misteriosa conhecida como Phantom Ruby (Rubi Fantasma em p','29/09/2017','https://m.media-amazon.com/images/I/61cdnxri3IL._AC_SL1000_.jpg','2021-08-21 15:40:22','2021-08-21 15:40:22',0,1),(8,'God of Wars','Sony','Enquanto os primeiros sete jogos foram vagamente baseados na mitologia grega, este título leva a série à mitologia nórdica.[23] Seis dos nove reinos da mitologia nórdica podem ser explorados. Antecedendo os Vikings,[21][24] a maioria do jogo ocorre na antiga Noruega no reino de Midgard, habitado por seres humanos e outras criaturas e é o mesmo reino que o mundo grego havia existido. Quanto mais criaturas começaram a aparecer muitos humanos fugiram. Outros reinos visitados como parte da história ','20/04/2018','https://m.media-amazon.com/images/I/A1iZyGhD-rL._AC_UL320_.jpg','2021-08-21 15:43:33','2021-08-21 15:43:33',0,1),(9,'Ghost of Tsushima','Nate Fox','Situado em 1274 na Ilha de Tsushima, o jogo gira em torno do último samurai, Jin Sakai (Daisuke Tsuji), durante a primeira invasão Mongol no Japão.[7] Jin terá que dominar um novo estilo de luta, o caminho do Ghost, para derrotar as forças mongóis e lutar pela liberdade e independência do Japão.[8]','17/07/2020','https://m.media-amazon.com/images/I/71PqM1pqVeL._AC_UL320_.jpg','2021-08-21 15:45:06','2021-08-21 15:45:06',0,1),(10,'Cyberpunk 2077','CD Projekt','Night City é uma megacidade americana localizada no Estado Livre da Califórnia do Norte, controlada por corporações – legislações locais e nacionais não têm efeito na região. Existe um conflito interno constante entre gangues e outras entidades que procuram dominar a cidade. Night City depende da robótica para todos os aspectos diários como coleta de resíduos, manutenção e transportes públicos.[36] A sua identidade visual é resultado de quatro eras de austero Entropismo, Brega colorido, opulento','19/12/2020','https://m.media-amazon.com/images/I/81Q47VAr6vL._AC_UL320_.jpg','2021-08-21 15:46:49','2021-08-21 15:46:49',0,1),(11,'Minecraft','Microsoft','Minecraft é um jogo eletrônico sandbox de sobrevivência criado pelo desenvolvedor sueco Markus \"Notch\" Persson e posteriormente desenvolvido e publicado pela Mojang Studios, cuja propriedade intelectual foi obtida pela Microsoft em 2014. Lançado inicialmente em maio de 2009 como um projeto em desenvolvimento, seu lançamento completo ocorreu em novembro de 2011 para Microsoft Windows, macOS e Linux, sendo posteriormente relançado para uma ampla variedade de plataformas. É o jogo eletrônico mais v','18/11/2011','https://m.media-amazon.com/images/I/51A5eowxVUL._AC_.jpg','2021-08-21 15:48:47','2021-08-21 15:48:47',0,1),(12,'Dark Souls 1','Namco Bandai Games','é um jogo eletrônico de RPG de ação desenvolvido pela FromSoftware e publicado pela Namco Bandai Games. Lançado originalmente em setembro de 2011 para PlayStation 3 e Xbox 360, é um sucessor espiritual de Demon\'s Souls e a segundo título da série Souls. Dark Souls se passa no reino fictício de Lordran, onde os jogadores assumem o papel de um personagem morto-vivo amaldiçoado que inicia uma peregrinação para descobrir o destino de sua espécie. Um relançamento para Microsoft Windows foi realizado ','04/10/2011','https://upload.wikimedia.org/wikipedia/pt/7/7c/Dark_Souls_1_capa.png','2021-08-21 15:53:40','2021-08-21 15:53:40',0,1),(13,'Spider-Man : Miles Morales',' Sony Interactive Entertainment','Spider-Man: Miles Morales é um jogo eletrônico de ação-aventura desenvolvido pela Insomniac Games e publicado pela Sony Interactive Entertainment para o PlayStation 4 e PlayStation 5. É uma expansão autônoma de Spider-Man,[1] de 2018, e foi anunciado pela primeira vez no evento de revelação do PlayStation 5 em junho de 2020. Ele foi lançado em novembro de 2020 para PlayStation 4 e como um título de lançamento do PlayStation 5.','12/11/2020','https://upload.wikimedia.org/wikipedia/pt/7/74/Spider-Man_Miles_Morales_capa.png','2021-08-21 15:58:48','2021-08-21 15:58:48',0,1),(14,'The Last of Us',' Naughty Dog','he Last of Us é um jogo eletrônico de ação-aventura e sobrevivência desenvolvido pela Naughty Dog e publicado pela Sony Computer Entertainment. Ele foi lançado exclusivamente para PlayStation 3 em 14 de junho de 2013. Na história, os jogadores controlam Joel, um homem encarregado de escoltar uma adolescente chamada Ellie através de um Estados Unidos pós-apocalíptico. The Last of Us é jogado a partir de uma perspectiva em terceira pessoa, com os jogadores usando armas de fogo, armas improvisadas ','14/07/2013','https://upload.wikimedia.org/wikipedia/pt/b/be/The_Last_of_Us_capa.png','2021-08-21 16:00:27','2021-08-21 16:00:27',0,1),(15,'Doom Eternal','id Software','As forças do Inferno começaram a invadir a Terra, e com a Union Aerospace Corporation luta para defendê-lo, o Slayer chega para repelir os demônios.[7]','20/03/2020','https://upload.wikimedia.org/wikipedia/pt/8/81/Doom_Eternal_capa.png','2021-08-21 16:02:50','2021-08-21 16:02:50',0,1),(16,'Fall Guys','Devolver Digital','Fall Guys: Ultimate Knockout é um jogo eletrônico battle royale multijogador desenvolvido pela Mediatonic e publicado no lançamento pela Devolver Digital. Foi anunciado na E3 2019 e lançado em 4 de agosto de 2020 para Microsoft Windows e PlayStation 4. É fortemente inspirado em jogos de corrida de obstáculos de programas de televisão como Takeshi\'s Castle,[3] Wipeout ou Ninja Warrior, onde 60 jogadores precisam superar desafios e vários obstáculos sem deixar de conquistar a única coroa e s','04/09/2020','https://upload.wikimedia.org/wikipedia/pt/9/96/Fall_Guys_capa.jpeg','2021-08-21 16:04:27','2021-08-21 16:04:27',0,1),(17,'Assassin\'s Creed Valhalla','Ubisoft Montreal','Assassin\'s Creed Valhalla é um jogo eletrônico de RPG de ação desenvolvido pela Ubisoft Montreal e publicado pela Ubisoft.[1] O sucessor de Assassin\'s Creed Odyssey, é o décimo segundo título principal e o vigésimo segundo lançamento da série Assassin\'s Creed foi lançado dia 10 de novembro de 2020 para Google Stadia, Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One e Xbox Series X.[2] Usando uma história alternativa, em Valhalla o jogador controla Eivor, um guerreiro Viking durante as I','10/11/2020','https://upload.wikimedia.org/wikipedia/pt/e/e9/Assassins_Creed_Valhalla_capa.png','2021-08-21 16:06:30','2021-08-21 16:06:30',0,1),(18,'FIFA 21','Electronic Arts','FIFA 21 é um videogame de simulação de esportes desenvolvido e publicado pela Electronic Arts, tendo como estrela da capa o jogador Kylian Mbappé.\r\n\r\nO jogo foi anunciado em 19 de junho de 2020[1], sendo, no mesmo ano, oficialmente publicado no dia 9 de outubro.[2]\r\n\r\nLançado de acordo com a temporada 2020-2021, o game apresenta como grandes novidades as novas mecânicas de simulação no modo carreira, junto com um editor de estádios no modo Ultimate Team.','19/20/20','https://upload.wikimedia.org/wikipedia/pt/7/76/EA_Sports_FIFA_21.jpg','2021-08-21 16:12:29','2021-08-21 16:12:29',0,1),(19,'Ori and the Will of the Wisps','Moon Studios','Os jogadores assumem o controle de Ori, um espírito guardião branco. Para progredir no jogo, os jogadores têm a tarefa de se mover entre plataformas e resolver quebra-cabeças. Diferente de Ori and the Blind Forest, Will of the Wisps parece confiar em salvamentos automáticos em vez de em links alma colocados manualmente, e o sistema de atualização sequencial do primeiro título foi abandonado por um sistema de fragmentos mais parecido com os encantos de Hollow Knight.[3]','11/03/2020','https://upload.wikimedia.org/wikipedia/pt/9/94/Ori_and_the_Will_of_the_Wisps.jpg','2021-08-21 16:21:54','2021-08-21 16:21:54',0,1),(22,'Grand Theft Auto V',' Rockstar North','Grand Theft Auto V é um jogo eletrônico de ação-aventura[2] que pode ser jogado a partir de uma perspectiva em terceira pessoa[3] ou primeira pessoa, porém esta última é disponível apenas nas plataformas PlayStation 4, Xbox One e Microsoft Windows.[4] Os jogadores completam missões, que são cenários lineares com objetivos definidos, a fim de progredirem pela história principal.[5] Os jogadores podem vagar livremente pelo mundo de jogo quando não estão dentro de missões. O mundo é composto pela á','17/09/2013','https://upload.wikimedia.org/wikipedia/pt/8/80/Grand_Theft_Auto_V_capa.png','2021-08-21 16:28:28','2021-08-21 16:28:28',0,1),(23,'Super Smash Bros','Nintendo','A série Super Smash Bros. tem uma jogabilidade diferente dos jogos de luta usuais; em vez de esgotar a barra de vida de um oponente, o objetivo é derrubar os oponentes do estágio. Cada jogador tem um total de dano, representado por uma porcentagem, que aumenta à medida que o dano é recebido e pode atingir um dano máximo de 999%. À medida que esse percentual aumenta, o personagem é empurrado progressivamente mais longe pelos ataques. Para nocautear um oponente, o jogador deve enviar esse personag','21/01/1999','https://upload.wikimedia.org/wikipedia/pt/2/2a/Super_Smash_Bros.jpg','2021-08-21 16:31:41','2021-08-21 16:31:41',0,1),(24,'The Legend of Zelda: Ocarina of Time','Nintendo','Ocarina of Time é um jogo de ação e aventura com elementos de RPG e quebra-cabeça disposto num vasto ambiente. O jogador controla Link, o protagonista da série, a partir de uma perspectiva de terceira-pessoa em um mundo tridimensional. Link combate principalmente com espada e escudo, mas também pode usar outras armas, como projéteis, bombas e magia. O esquema de controle introduziu técnicas como ações sensíveis ao contexto e um sistema de mira denominado \"mira-Z\", a qual permite que o jogador ma','21/11/1998','https://upload.wikimedia.org/wikipedia/pt/1/17/The_Legend_of_Zelda_Ocarina_of_Time_capa.png','2021-08-21 16:33:16','2021-08-21 16:33:16',0,1),(25,'God of War (2005)','Santa Monica Studio','God of War é um jogo eletrônico de ação e aventura para um jogador, em terceira pessoa, com elementos de hack and slash, visto de uma perspectiva de câmera fixa. O jogador controla o personagem Kratos em combates baseados em combos, plataformas e elementos de jogo de quebra-cabeça, e batalhas conta inimigos que derivam principalmente da mitologia grega, incluindo soldados, harpias, minotauros, górgonas, ciclopes, sirenes, sátiros, centauros, cérberos e oponentes chefes — a Hidra e um minotauro g','22/03/2005','https://upload.wikimedia.org/wikipedia/pt/5/53/God_of_War_2005_capa.png','2021-08-21 16:35:35','2021-08-21 16:35:35',0,1),(26,'Wii Sports','Nintendo Entertainment','Wii Sports consiste em cinco jogos de esportes separados—tênis, beisebol, boliche, golfe, e boxe—acessados a partir do menu principal.[3][4] Os jogos usam os recursos de sensor de movimento do Wii Remote e do Nunchuk para controlar as ações na tela. O jogador move o controle de maneira semelhante à maneira como os jogos separados são jogados na vida real; por exemplo, segurar e girar o Wii Remote como um taco de golfe, taco de beisebol, raquete de tênis ou bola de boliche.[5] Alguns aspectos da ','19/11/2006','https://upload.wikimedia.org/wikipedia/pt/b/b5/Wii_Sports_capa.png','2021-08-21 16:37:03','2021-08-21 16:37:03',0,1),(27,'Call of Duty: Modern Warfare','Infinity Ward','O jogo conta com escolhas morais baseadas em táticas, onde o jogador é avaliado e recebe uma pontuação no final de cada nível; os jogadores têm que verificar rapidamente se os NPCs são uma ameaça ou não, como encontrar um civil que acredita-se estar indo pegar uma arma ou indo pegar um bebê. Esta pontuação de dano colateral, referida como uma avaliação de ameaça, é baseada em quantos civis o jogador fere ou mata e varia de grau de A a F - as recompensas são introduzidas à aqueles que pontuam mai','25/10/2019','https://upload.wikimedia.org/wikipedia/pt/e/e9/CallofDutyModernWarfare%282019%29.jpg','2021-08-21 16:38:55','2021-08-21 16:38:55',0,1),(28,'Fallout 3','americana Bethesda Softwork','Fallout 3 é um RPG em primeira pessoa (o jogador vê o mundo pelos olhos do protagonista), com todas as características que distinguem esse gênero. Entre elas: boa customização inicial do personagem, sistema de experiência e evolução do personagem, armas e armaduras, NPCs, quests e etc. Há opção de jogar-se em terceira pessoa (o jogador vê o personagem).','28/10/2008','https://upload.wikimedia.org/wikipedia/pt/8/83/Fallout_3_cover_art.PNG','2021-08-21 16:40:28','2021-08-21 16:40:28',0,1),(29,'The Sims','Will Wright','Em primeiro lugar, jogo inclui um sistema de arquitetura muito avançado. O jogo foi originalmente projetado para ser um simulador de arquitetura apenas, com os Sims apenas para julgar as casas. Durante o desenvolvimento foi decidido que os Sims eram mais interessantes que as casas e um legado acabava de nascer. O SimCity também foi projetado apenas como um jogo para criar cidades para um jogo de bombardeio que Wright estava criando.','04/02/2000','https://media.contentapi.ea.com/content/dam/gin/images/2017/01/the-sims-4-keyart.jpg.adapt.crop1x1.767w.jpg','2021-08-21 16:43:07','2021-08-21 16:43:07',0,1),(30,'Resident Evil 7: Biohazard','Capcom','O jogador controla o protagonista, Ethan, a partir de uma perspectiva em primeira pessoa. Embora Ethan seja um civil que ofereça poucas habilidades de combate, ele pode usar uma variedade de armas de fogo, incluindo pistolas, espingardas, lança-chamas, explosivos e motosserras, que auxiliam no combate contra os inimigos, descritos como \"Mofados\" Além disso, o personagem pode fazer um giro rápido de 180 graus para evitar as criaturas, assim como bloquear ataques recebidos para reduzir o','24/01/2017','https://upload.wikimedia.org/wikipedia/pt/e/ec/Capa_Resident_Evil_7.jpg','2021-08-21 16:44:57','2021-08-21 16:44:57',0,1),(31,'Resident Evil Village','Capcom','Três anos depois de derrotar os Bakers e Eveline em Dulvey, Ethan e Mia Winters foram transferidos à Europa por Chris Redfield, a fim de começarem uma nova vida com sua filha recém-nascida, Rosemary Winters. Em uma determinada noite, Mia é assassinada por Chris Redfield enquanto ele e seu esquadrão Houndwolf invadem a casa, deixando Ethan inconsciente e sequestrando-o junto com sua filha. Ao acordar, Ethan se depara ao lado de um caminhão de transporte capotado, chegando a nas proximidades de um','07/05/2021','https://upload.wikimedia.org/wikipedia/pt/2/2c/Resident_Evil_Village.png','2021-08-21 16:46:58','2021-08-21 16:46:58',0,1),(32,'Diablo 3','Blizzard Entertainment','Diablo III segue a história de seu predecessor, Diablo II: Lord of Destruction, que superou expectativas. A história do novo jogo passa-se depois de vinte anos dos acontecimentos que marcaram o fim de Diablo II. Os guerreiros finalmente derrotaram o mal, mas quando um cometa cai na Terra exatamente no lugar onde Diablo foi confinado, os guerreiros são novamente convocados para defender a humanidade contra o novo inimigo.O estilo do jogo continua o mesmo (visão isométrica), mas desta vez utilizan','28/06/2008','https://upload.wikimedia.org/wikipedia/pt/1/12/DiabloIIIcover.jpg','2021-08-21 16:49:37','2021-08-21 16:49:37',0,1),(33,'Warcraft III',' Blizzard Entertainment','O Warcraft III apresentou uma mudança importante com relação às versões anteriores do jogo: unidades únicas, mais poderosas, chamadas \"Heroes\" (heróis). Um herói no jogo pode achar ou trocar itens mágicos para melhorar suas características e atributos, ao género dos RPGs. Os heróis podem também adquirir auras de proteção através de habilidades, que beneficiam unidades aliadas que estão próximas dele. Tal como nos RPGs, os heróis ganham experiência através de combate, subindo de nível, e desbloqu','03/07/2002','https://upload.wikimedia.org/wikipedia/pt/6/66/WarcraftIII.jpg','2021-08-21 16:51:26','2021-08-21 16:51:26',0,1),(34,'Tony Hawk\'s Pro Skater 2','Activision','Tony Hawk\'s Pro Skater 2 é o segundo jogo da série Tony Hawk\'s. Foi desenvolvido pela Neversoft e publicado pela Activision em 2000. O jogo foi primeiramente lançado para o PlayStation, logo depois lançado para o Nintendo 64, Dreamcast e Game Boy Color. A versão do jogo para o Game Boy Advance foi muito elogiada por dar uma impressão de jogo em 3D, e foi eleito como o primeiro jogo de aparelho portátil em 3D. O jogo foi também o primeiro a possuir a opção de criação de skatistas.','08/03/2001','https://upload.wikimedia.org/wikipedia/pt/a/a9/Tony_Hawk%27s_Pro_Skater_2_n64_cover.png','2021-08-21 16:54:33','2021-08-21 16:54:33',0,1),(35,'Final Fantasy XIV','Square Enix','Final Fantasy XIV (ファイナルファンタジーXIV Fainaru Fantajī Fōtīn?), também chamado de Final Fantasy XIV Online, é um jogo eletrônico MMORPG desenvolvido pela Square Enix exclusivamente para Microsoft Windows. É o décimo quarto jogo principal da série Final Fantasy e o segundo MMORPG da franquia após Final Fantasy XI. Ele se passa em Eorzea e os jogadores assumem o controle de um avatar customizável enquanto exploram o mundo, sendo pegos tanto na invasão do Império Garleano quanto na ameaça dos Primals, d','30/08/2010','https://upload.wikimedia.org/wikipedia/pt/c/c8/FFXIV-logo.png','2021-08-21 16:56:14','2021-08-21 16:56:14',0,1),(36,'Counter-Strike: Global Offensive','Valve','O jogo conta com conteúdo clássico de tiro, como versões retrabalhadas de mapas clássicos, bem como novos mapas, personagens e modos de jogo.[2] O sistema multiplayer multi-plataformas foi planejado entre jogadores de Windows, OS X, Linux e PSN, mas acabou excluindo o PSN por causa das diferenças na frequência de atualização dos sistemas.[3][4] A versão da PSN oferece três formas de controles, que inclui DualShock 3, PlayStation Move e é fizero experimenta.','21/08/2012','https://upload.wikimedia.org/wikipedia/pt/c/ce/Counter-Strike_Global_Offensive.jpg','2021-08-21 16:59:11','2021-08-21 16:59:11',0,1),(37,'Fate/Grand Order','Type-Moon','Fate/Grand Order is an online RPG set in the Fate/stay franchise, for iOS and Android.\r\n','30/09/2015','https://images.igdb.com/igdb/image/upload/t_cover_big/co1qq4.jpg','2021-08-21 20:39:16','2021-08-21 20:39:16',0,1),(38,'The Witcher 3: Wild Hunt','CD Projekt RED','Become a professional monster slayer and embark on an adventure of epic proportions! Upon its release, The Witcher 3: Wild Hunt became an instant classic, claiming over 250 Game of the Year awards. Now you can enjoy this huge, over 100-hour long, open-world adventure along with both its story-driven expansions worth an extra 50 hours of gameplay. This edition includes all additional content - new weapons, armor, companion outfits, new game mode and side quests.\r\n','30/08/2016','https://images.igdb.com/igdb/image/upload/t_cover_big/co1wz4.jpg','2021-08-21 20:41:11','2021-08-21 20:41:11',0,1);
/*!40000 ALTER TABLE `jogos` ENABLE KEYS */;
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