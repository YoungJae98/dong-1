import React, { useEffect, useState } from "react";
import { NavLink, Route } from "react-router-dom";

import logo_inversed from "../assets/images/logo_reversed.png";
import clubroomlayout from "../assets/images/clubroomlayout.png";
import v2 from "../assets/images/visual/visual2.jpg";

//show
import hanwoollim from "../assets/images/clubs/show/hanwoollim.jpg";
import intro from "../assets/images/clubs/show/intro.png";
import nlehyem from "../assets/images/clubs/show/nlhyem.jpg";
import pageseven from "../assets/images/clubs/show/pageseven.png";
import sejonggeukhoi from "../assets/images/clubs/show/sejonggeukhoi.jpg";
import soultrain from "../assets/images/clubs/show/soultrain.png";
import ter from "../assets/images/clubs/show/ter.png";
import theblack from "../assets/images/clubs/show/theblack.jpg";
import sp from "../assets/images/clubs/show/sp.png";
//culture
import bamboo from "../assets/images/clubs/culture/bamboo.png";
import doobaqui from "../assets/images/clubs/culture/doobaqui.png";
import hanson from "../assets/images/clubs/culture/hanson.png";
import master from "../assets/images/clubs/culture/master.png";
import mis from "../assets/images/clubs/culture/mis.jpg";
import youth from "../assets/images/clubs/culture/youth.png";
import yool from "../assets/images/clubs/culture/yool.png";
//volunteer
import sels from "../assets/images/clubs/volunteer/sels.png";
import zook from "../assets/images/clubs/volunteer/zook.jpg";
//religion
import ivf from "../assets/images/clubs/religion/ivf.jpg";
import jym from "../assets/images/clubs/religion/jym.png";
import ccc from "../assets/images/clubs/religion/ccc.png";
import ksgi from "../assets/images/clubs/religion/ksgi.jpg";
import regina from "../assets/images/clubs/religion/regina.png";
import cam from "../assets/images/clubs/religion/cam.png";
//physical
import jiujitsu from "../assets/images/clubs/physical/jiujitsu.png";
import jump from "../assets/images/clubs/physical/jump.png";
import rush from "../assets/images/clubs/physical/rush.gif";
import sac from "../assets/images/clubs/physical/sac.png";
import sejongkings from "../assets/images/clubs/physical/sejongkings.jpg";
import ski from "../assets/images/clubs/physical/ski.png";
import stc from "../assets/images/clubs/physical/stc.png";
import tsp from "../assets/images/clubs/physical/tsp.png";
import yacht from "../assets/images/clubs/physical/yacht.png";
import bal from "../assets/images/clubs/physical/bal.jpg";
import choigang from "../assets/images/clubs/physical/choigang.png";
//academic
import interfaec from "../assets/images/clubs/academic/interface.png";
import arom from "../assets/images/clubs/academic/arom.png";
import kusa from "../assets/images/clubs/academic/kusa.png";
import sejongmoon from "../assets/images/clubs/academic/sejongmoon.png";
import sejongseohoi from "../assets/images/clubs/academic/sejongseohoi.png";
import star from "../assets/images/clubs/academic/star.png";
import unsa from "../assets/images/clubs/academic/unsa.png";
import youma from "../assets/images/clubs/academic/youma.png";

import Button from "../components/Button";
import Container from "../components/Container";
import List from "../components/List";
import Listitem from "../components/Listitem";
import Remote from "../components/Remote";
import Text from "../components/Text";

function CentralClub() {
  const [showClub, setShowClub] = useState([]);
  const [physicalClub, setPhysicalClub] = useState([]);
  const [volunteerClub, setVolunteerClub] = useState([]);
  const [cultureClub, setCultureClub] = useState([]);
  const [academicClub, setAcademicClub] = useState([]);
  const [religionClub, setReligionClub] = useState([]);
  useEffect(() => {
    setShowClub([
      {
        clubID: 1,
        clubName: "늘혬코러스",
        clubLogo: nlehyem,
        clubSummary:
          "1988년 설립된 중앙 밴드동아리 늘혬코러스입니다. 합주 및 스터디를 통해 정기적으로 공연을 진행하고 있습니다.",
      },
      {
        clubID: 2,
        clubName: "더블랙",
        clubLogo: theblack,
        clubSummary:
          "세종대학교 흑인음악동아리 더블랙입니다. 저희는 노래를 좋아하는 친구들이 모여 축제, 버스킹 등 여러가지 공연을 하는 동아리입니다. 노래를 좋아하는 분이라면 누구든 환영입니다! ",
      },
      {
        clubID: 3,
        clubName: "사운드플러스",
        clubLogo: sp,
        clubSummary:
          "올해로 30기가 된 밴드 동아리입니다. 동아리명처럼 부원들이 서로 교류하며 좋은 공연을 해오고 있습니다.",
      },
      {
        clubID: 4,
        clubName: "세종극회",
        clubLogo: sejonggeukhoi,
        clubSummary:
          "중앙 연극동아리 ‘세종극회'입니다. 세종극회는 연기, 연출, 소품 등의 분야가 모여 공연 준비를 하여 정기적인 연극 공연을 올립니다.",
      },
      {
        clubID: 5,
        clubName: "소울트레인",
        clubLogo: soultrain,
        clubSummary:
          "2005년 설립된 중앙흑인음악동아리 소울트레인입니다. 주된 활동은 교내 행사에서의 공연과 외부공연장에서의 정기공연이며, 곡 작업 및 스터디, 공연을 위한 연습을 진행합니다. ",
      },
      {
        clubID: 6,
        clubName: "인트로",
        clubLogo: intro,
        clubSummary:
          "춤과 랩을 즐기며 열정이 넘치는 중앙힙합동아리로, 교내행사 및 자체 정기공연을 통해 대학생활에 잊지못할 추억을 남겨드립니다!",
      },
      {
        clubID: 7,
        clubName: "터벌림",
        clubLogo: ter,
        clubSummary:
          "1984년 창립된 사물놀이 동아리입니다. 사물놀이 공연을 위해 연습하며, 많은 이에게 국악에 대한 관심을 도모할 수 있도록 노력합니다.",
      },
      {
        clubID: 8,
        clubName: "페이지세븐",
        clubLogo: pageseven,
        clubSummary:
          "락, 어쿠스틱, 발라드, 팝 다해버리는 중앙 밴드동아리 PAGE7입니다. OT, 대동제, 힘미제 등 교내 행사 무대, 타 학교 협동 공연과 초심자들을 위한 악기 레슨을 진행하고 있습니다.",
      },
      {
        clubID: 9,
        clubName: "한울림",
        clubLogo: hanwoollim,
        clubSummary:
          "기타를 가르치고 배우고 연주하고 감상하면서 음악을 통해 사람들과 친목을 쌓는 동아리입니다.",
      },
    ]);
    setPhysicalClub([
      {
        clubID: 1,
        clubName: "RUSH",
        clubLogo: rush,
        clubSummary:
          "자체적인 연습경기 및 타 대학과의 친선경기를 주기적으로 진행중에 있으며 각종 대학대회에 참가하고 있습니다. 농구를 못하시더라도 관심이 있으시다면 러쉬는 두 팔 벌려 맞이하겠습니다.",
      },
      {
        clubID: 2,
        clubName: "ESCAPER",
        clubLogo: jiujitsu,
        clubSummary:
          "'주짓수' 라는 종목을 통해 세종인들의 심신의 단련과 호신 그리고 주짓수에 대한 흥미 갖게 하기 위한 목적을 띱니다. 매주 운동 모임을 통해 여러 사람들의 신체적 능력을 자신의 능력과 겨뤄 볼 수 있고 여기서 느낀 차이를 뛰어넘기 위한 기술들을 익히고 공유합니다.",
      },
      {
        clubID: 3,
        clubName: "STC",
        clubLogo: stc,
        clubSummary:
          "1981년에 창립된 Sejong Tennis Club STC입니다. 테니스를 통한 동아리원간의 친선도모와 실력향상을 목적으로 하고, 트레이닝 및 경기연습, 타 대학과 친선경기를 하고 있습니다.",
      },
      {
        clubID: 4,
        clubName: "TSP",
        clubLogo: tsp,
        clubSummary:
          "2012년 설립된 중앙 탁구동아리 TSP입니다. 매주 화, 목 개인레슨과 연습경기를 진행합니다. 정기적으로 리그를 진행하고 있습니다. 타 대학과의 교류전과 각종 대회에 자주 참여하고 있습니다.",
      },
      {
        clubID: 5,
        clubName: "발파람",
        clubLogo: bal,
        clubSummary:
          "20년 역사를 가진 택견동아리 발파람입니다. 택견은 가벼운 개인운동과 무거운 격투기 스포츠의 성격을 가진 운동입니다. 기본적으로 매주 모여 운동을 하고 있으며, 매년 열리는 서울시대회, 생활체육대회, 전국체육대회에 참가해 좋은 성적을 거두고 있습니다.",
      },
      {
        clubID: 6,
        clubName: "산악부",
        clubLogo: sac,
        clubSummary:
          "등산과 등반을 통해 체력과 정신력을 기르며, 일상에서는 보기 힘든 멋진 풍경을 보고 특별한 경험을 할 수 있습니다.",
      },
      {
        clubID: 7,
        clubName: "세종스키",
        clubLogo: ski,
        clubSummary:
          "대학스키연맹 소속 스키부, 세종스키입니다. 매년 겨울, 연맹 합숙 및 대회 진행합니다. #평생추억 #실력무관 #무료강습 #미친인맥 #눈꽃연애",
      },
      {
        clubID: 8,
        clubName: "세종킹스",
        clubLogo: sejongkings,
        clubSummary:
          "1999년에 창단된 세종대학교 야구 동아리입니다. 야구실력증진과 친목도모를 목적으로 하며, KUSF, KUBA 등 다양한 대회에 참여하고 전국대학아마야구협회(AUBL)에 소속되어 리그에 참가하고 있습니다.",
      },
      {
        clubID: 9,
        clubName: "요트부",
        clubLogo: yacht,
        clubSummary:
          "1976년부터 이어진 전통 있는 전국대학 연합 동아리입니다. 주요활동으로 매주 한강세일링 및 여름, 겨울 해양훈련을 진행하고 있습니다.",
      },
      {
        clubID: 10,
        clubName: "점프",
        clubLogo: jump,
        clubSummary:
          "학기 중에는 스케이트보드 혹은 롱보드를 타고 여름엔 서핑 및 웨이크보드, 겨울엔 스노우보드를 타는 것을 주 목적으로 만들어진 동아리입니다. 주 활동은 스노우보드이고 그에 따라 겨울에 모든 포커스가 맞춰져 있습니다. 스노우보드를 타보셨던 분도, 타보지 않으셨던 분도 재미있게 타고자 만든 동아리입니다.",
      },
      {
        clubID: 11,
        clubName: "최강유도",
        clubLogo: choigang,
        clubSummary:
          "중앙 유도동아리 최강유도입니다. 부드러움이 강함을 제압한다는 유도의 정신을 바탕으로 심신을 단련하여 건전한 대학문화를 만드는 데 목표를 두고 있습니다.",
      },
    ]);
    setVolunteerClub([
      {
        clubID: 1,
        clubName: "셀스",
        clubLogo: sels,
        clubSummary:
          "세종대학교 중앙 영어봉사 동아리 셀스입니다. 다양한 프로그램들을 통해 초등학생들이 영어와 친해질 수 있게 도와주고 있습니다.",
      },
      {
        clubID: 2,
        clubName: "죽순회",
        clubLogo: zook,
        clubSummary:
          "정기 봉사활동과 비정기 봉사활동을 함께 진행합니다. 봉사뿐만 아니라 MT, 집회, 건대 죽순회와의 교류 등을 통해 친목활동도 하고 있습니다. ",
      },
    ]);
    setCultureClub([
      {
        clubID: 1,
        clubName: "BAMBOO",
        clubLogo: bamboo,
        clubSummary:
          "2014년에 설립된 밤부는 캐주얼 사진동아리입니다. 촬영 장비에 구애를 받지 않고 사진찍고자 하는 마음만 있다면 누구나 함께 할 수 있는 사진 동아리입니다. 매달 정기출사와 1년에 2번 사진전을 개최합니다.",
      },
      {
        clubID: 2,
        clubName: "두바퀴",
        clubLogo: doobaqui,
        clubSummary:
          '"두바퀴"는 바이크 소지 여부와 상관없이, 바이크를 좋아하거나 관심있는 사람이라면 누구나 함께 즐길 수 있는 동아리입니다. 매주 목요일 바이크를 타고 수도권 맛집, 카페 탐방을 하고 한달에 한번 서울을 벗어나 전국팔도 어디든 누비는 MT, 투어를 갑니다. 무려 이륜차로 제주도도 가능!!',
      },
      {
        clubID: 3,
        clubName: "마스터",
        clubLogo: master,
        clubSummary:
          "동아리내 100여종 이상의 게임을 보유하고 있어 다양한 종류의 보드게임을 즐길 수 있습니다.",
      },
      {
        clubID: 4,
        clubName: "MIS",
        clubLogo: mis,
        clubSummary:
          "지방에서 고등학교를 마치고 서울로 처음 올라오는 학생들을 위한 서울탐방과, 고등학생 때 해보지 못한 활동들을 동아리를 통해서 여러 사람들과 어울려 할 수 있는 문화생활동아리!",
      },
      {
        clubID: 5,
        clubName: "유스호스텔",
        clubLogo: youth,
        clubSummary:
          "1967년 설립된 중앙 여행동아리 유스호스텔입니다. 국내 여러 곳 여행 및 타 대학과의 연합 또한 정기적으로 진행 중입니다.",
      },
      {
        clubID: 6,
        clubName: "율",
        clubLogo: yool,
        clubSummary: "몸짓패, 민중 가요를 몸으로 표현",
      },
      {
        clubID: 7,
        clubName: "한손",
        clubLogo: hanson,
        clubSummary:
          "오랜 역사를 가진 만화 동아리 한손입니다. 매년마다 창립제와 회지 발간, 그 외 다양한 활동을 통해 친목과 경험을 쌓고 있습니다.",
      },
    ]);
    setAcademicClub([
      {
        clubID: 1,
        clubName: "KUSA",
        clubLogo: kusa,
        clubSummary:
          "한국유네스코학생회 KUSA입니다.토론, 봉사, 연합(전국 43개의 대학교에서 운영 중) 등의 다양한 활동을 하고 있습니다.",
      },
      {
        clubID: 2,
        clubName: "UNSA",
        clubLogo: unsa,
        clubSummary:
          "UNSA(유엔한국학생협회)는 전국 30여개 대학교의 동아리로 조직된 유엔한국협회의 산하단체입니다. 다양한 주제로 진행되는 토론을 통해 누구든지 시사에 쉽게 관심을 가질 수 있도록 돕고 있습니다.",
      },
      {
        clubID: 3,
        clubName: "별무리",
        clubLogo: star,
        clubSummary:
          "교내 유일한 천체관측 동아리로 정기적으로 교내 혹은 교외에서 천체를 관측합니다. 전문적인 지식이 없어도 함께 즐기며 친목을 도모할 수 있는 동아리입니다.",
      },
      {
        clubID: 4,
        clubName: "세종문학회",
        clubLogo: sejongmoon,
        clubSummary:
          "세종문학회는 서적이나 사회의 각종 이슈를 정하여 토론을 하며 논리적인 사고능력과 체계적인 주장 능력을 기르는 활동을 하고 있습니다. 행사 외에는 단체 공연관람 같은 문화 활동을 운영하고 있습니다.",
      },
      {
        clubID: 5,
        clubName: "세종서회",
        clubLogo: sejongseohoi,
        clubSummary:
          "1981년 설립된 중앙 서예동아리 세종서회입니다. 한글/한문 서예를 배우며 정기전시회를 통해 자신만의 작품을 만들어 나갑니다.",
      },
      {
        clubID: 6,
        clubName: "아롬",
        clubLogo: arom,
        clubSummary:
          "안드로이드앱과 IOS앱을 개발하는 동아리입니다. 개발부, 기획&디자인부로 나누어 학기 단위 앱 개발 프로젝트를 진행합니다. 학과, 학번, 나이, 실력과 무관하게 누구나 가입해서 앱 개발에 참여할 수 있습니다.",
      },
      {
        clubID: 7,
        clubName: "유마프랜",
        clubLogo: youma,
        clubSummary:
          "세종대학교 마케팅 중앙동아리 유마프랜입니다. 마케팅을 전혀 모르는 신입생, 이과생도 재미있게 마케팅을 경험할 수 있는 동아리입니다. 매학기마다 관련 프로젝트를 진행하고 있습니다.",
      },
      {
        clubID: 8,
        clubName: "인터페이스",
        clubLogo: interfaec,
        clubSummary:
          "1988년에 설립된 중앙 학술 프로그래밍 동아리 인터페이스입니다. 스터디, 해커톤, 프로젝트 전시회 등 다양한 활동을 통해 사람과 컴퓨터를 잇는 인터페이스의 역할을 합니다.",
      },
    ]);
    setReligionClub([
      {
        clubID: 1,
        clubName: "CAM",
        clubLogo: cam,
        clubSummary:
          "CAM 이라는 이름은 그리스도의 대사 (Christ’s Ambassador Mission) 라는사명 공동체를 의미한다. 우리는 그리스도의 대사로서 개인과, 캠퍼스, 민족, 더 나아가 열방에 하나님 나라를 확장하는 선교 공동체이다.",
      },
      {
        clubID: 2,
        clubName: "CCC",
        clubLogo: ccc,
        clubSummary:
          "전국 300여개 대학교에서 활동 중인 기독교 동아리 CCC입니다. 크리스천 신앙 훈련 활동들과 누구나 함께 할 수 있는 수련회, 단기선교 등 다양한 대외 활동을 하고 있습니다.",
      },
      {
        clubID: 3,
        clubName: "IVF",
        clubLogo: ivf,
        clubSummary:
          "한국기독학생회 IVF는 전국 150여 개 캠퍼스에서 '캠퍼스와 세상 속의 하나님 나라 운동'을 모토로 활동하고 있는 학생운동 단체입니다.",
      },
      {
        clubID: 4,
        clubName: "JYM",
        clubLogo: jym,
        clubSummary:
          "JYM(Joyful Youth Mission)은 복음적 선교단체(KAICAM,기연 소속)입니다. 캠퍼스의 한 사람을 목자로 세워 열방을 제자화 하는 것을 사명으로 삼고 있습니다.",
      },
      {
        clubID: 5,
        clubName: "KSGI",
        clubLogo: ksgi,
        clubSummary:
          "SGI는 1930년 창립된 이래 생명존엄의 불법을 기조로 인류의 평화와 행복을 위해 노력하는 단체로 해당 종교의 동아리입니다.",
      },
      {
        clubID: 6,
        clubName: "레지나",
        clubLogo: regina,
        clubSummary:
          "세종대학교 가톨릭 학생회 레지나입니다. 하느님의 사랑을 배우고, 나누며, 몸소 실천하여 학교 복음화에 기여하고자 하는 것이 기본 목적입니다.",
      },
    ]);
  }, []);
  return (
    <>
      <Container height="145px">
        <img src={v2} alt="" />
      </Container>
      <Container height="1800px" backgroundColor="">
        <Container width="200px" verticalAlign="baseline">
          <Container
            width="200px"
            height="366px"
            fd="column"
            verticalAlign="baseline"
            position="sticky"
            marginTop="90px"
          >
            <Container
              height="50px"
              horizontalAlign="left"
              verticalAlign="flex-end"
            >
              <img src={logo_inversed} alt="" width="40px" />
              <Text fontColor="#14406c" fontSize="21px" marginLeft="5px">
                중앙동아리 소개
              </Text>
            </Container>
            <Remote
              width="200px"
              paddingTop="10px"
              paddingBottom="10px"
              marginTop="10px"
            >
              <List fd="column">
                <Button backgroundColor="white">
                  <NavLink to="/centralclub/">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      label="동방 배치도"
                      hoverUnderline
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white">
                  <NavLink to="/centralclub/show">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      label="공연 분과"
                      hoverUnderline
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white">
                  <NavLink to="/centralclub/culture">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      label="문화 분과"
                      hoverUnderline
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white">
                  <NavLink to="/centralclub/volunteer">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      label="봉사 분과"
                      hoverUnderline
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white">
                  <NavLink to="/centralclub/religion">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      label="종교 분과"
                      hoverUnderline
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white">
                  <NavLink to="/centralclub/physical">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      label="체육 분과"
                      hoverUnderline
                    ></Listitem>
                  </NavLink>
                </Button>
                <Button backgroundColor="white">
                  <NavLink to="/centralclub/academic">
                    <Listitem
                      height="40px"
                      fontColor="#14406c"
                      label="학술 분과"
                      hoverUnderline
                    ></Listitem>
                  </NavLink>
                </Button>
              </List>
            </Remote>
          </Container>
        </Container>
        <Container
          backgroundColor=""
          width="1062px"
          fd="column"
          marginLeft="30px"
          verticalAlign="flex-start"
        >
          <Route exact path="/centralclub/">
            <Container
              height="40px"
              marginTop="80px"
              marginLeft="20px"
              width="1000px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                동방 배치도
              </Text>
            </Container>
            <Container
              backgroundColor="white"
              borderRadius="8px"
              fd="column"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              marginTop="30px"
              paddingTop="30px"
              width="1000px"
            >
              <Container
                fd="column"
                horizontalAlign="left"
                verticalAlign="flex-start"
              >
                <img src={clubroomlayout} alt="sejong" width="500px" />
              </Container>
            </Container>
          </Route>
          <Route path="/centralclub/physical">
            <Container
              height="40px"
              marginTop="80px"
              marginLeft="20px"
              width="1000px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                체육 분과
              </Text>
            </Container>
            <Container
              backgroundColor="white"
              borderRadius="8px"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              marginTop="30px"
              width="1000px"
              display="block"
            >
              <Container
                width="1000px"
                height="50px"
                horizontalAlign="flex-end"
              >
                <Text fontSize="21px" fontColor="grey">
                  동아리 로고를 클릭하시면 각 동아리 페이지로 이동합니다.
                </Text>
              </Container>
              {physicalClub.map((club) => {
                return (
                  <Container
                    width="500px"
                    height="210px"
                    display="inline-block"
                    key={club.clubID}
                    className="club-container"
                    marginTop="30px"
                    visual
                  >
                    <Container className="club-contents-container">
                      <Container
                        className="club-image-container"
                        width="150px"
                        height="150px"
                      >
                        <img
                          src={club.clubLogo}
                          alt=""
                          width="100%"
                          height="auto"
                        />
                      </Container>
                      <Container
                        className="club-info-container"
                        fd="column"
                        verticalAlign="flex-start"
                        horizontalAlign="flex-start"
                        paddingLeft="10px"
                        paddingRight="10px"
                        width="310px"
                      >
                        <Text clubName>{club.clubName}</Text>
                        <Text clubSummary>{club.clubSummary}</Text>
                      </Container>
                    </Container>
                  </Container>
                );
              })}
            </Container>
          </Route>
          <Route path="/centralclub/culture">
            <Container
              height="40px"
              marginTop="80px"
              marginLeft="20px"
              width="1000px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                문화 분과
              </Text>
            </Container>
            <Container
              backgroundColor="white"
              borderRadius="8px"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              marginTop="30px"
              width="1000px"
              display="block"
            >
              <Container
                width="1000px"
                height="50px"
                horizontalAlign="flex-end"
              >
                <Text fontSize="21px" fontColor="grey">
                  동아리 로고를 클릭하시면 각 동아리 페이지로 이동합니다.
                </Text>
              </Container>
              {cultureClub.map((club, index) => {
                return (
                  <Container
                    width="500px"
                    height="210px"
                    display="inline-block"
                    key={club.clubID}
                    className="club-container"
                    marginTop="30px"
                  >
                    <Container className="club-contents-container">
                      <Container
                        className="club-image-container"
                        width="150px"
                        height="150px"
                      >
                        <img
                          src={club.clubLogo}
                          alt=""
                          width="100%"
                          height="auto"
                        />
                      </Container>
                      <Container
                        className="club-info-container"
                        fd="column"
                        verticalAlign="flex-start"
                        horizontalAlign="flex-start"
                        paddingLeft="10px"
                        paddingRight="10px"
                        width="310px"
                      >
                        <Text clubName>{club.clubName}</Text>
                        <Text clubSummary>{club.clubSummary}</Text>
                      </Container>
                    </Container>
                  </Container>
                );
              })}
            </Container>
          </Route>
          <Route path="/centralclub/show">
            <Container
              height="40px"
              marginTop="80px"
              marginLeft="20px"
              width="1000px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                공연 분과
              </Text>
            </Container>
            <Container
              backgroundColor="white"
              borderRadius="8px"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              marginTop="30px"
              width="1000px"
              display="block"
            >
              <Container
                width="1000px"
                height="50px"
                horizontalAlign="flex-end"
              >
                <Text fontSize="21px" fontColor="grey">
                  동아리 로고를 클릭하시면 각 동아리 페이지로 이동합니다.
                </Text>
              </Container>
              {showClub.map((club, index) => {
                return (
                  <Container
                    width="500px"
                    height="210px"
                    display="inline-block"
                    key={club.clubID}
                    className="club-container"
                    marginTop="30px"
                  >
                    <Container className="club-contents-container">
                      <Container
                        className="club-image-container"
                        width="150px"
                        height="150px"
                      >
                        <img
                          src={club.clubLogo}
                          alt=""
                          width="100%"
                          height="auto"
                        />
                      </Container>
                      <Container
                        className="club-info-container"
                        fd="column"
                        verticalAlign="flex-start"
                        horizontalAlign="flex-start"
                        paddingLeft="10px"
                        paddingRight="10px"
                        width="310px"
                      >
                        <Text clubName>{club.clubName}</Text>
                        <Text clubSummary>{club.clubSummary}</Text>
                      </Container>
                    </Container>
                  </Container>
                );
              })}
            </Container>
          </Route>
          <Route path="/centralclub/academic">
            <Container
              height="40px"
              marginTop="80px"
              marginLeft="20px"
              width="1000px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                학술 분과
              </Text>
            </Container>
            <Container
              backgroundColor="white"
              borderRadius="8px"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              marginTop="30px"
              width="1000px"
              display="block"
            >
              <Container
                width="1000px"
                height="50px"
                horizontalAlign="flex-end"
              >
                <Text fontSize="21px" fontColor="grey">
                  동아리 로고를 클릭하시면 각 동아리 페이지로 이동합니다.
                </Text>
              </Container>
              {academicClub.map((club, index) => {
                return (
                  <Container
                    width="500px"
                    height="210px"
                    display="inline-block"
                    key={club.clubID}
                    marginTop="30px"
                    className="club-container"
                    visual
                  >
                    <Container className="club-contents-container">
                      <Container
                        className="club-image-container"
                        width="150px"
                        height="150px"
                      >
                        <img
                          src={club.clubLogo}
                          alt=""
                          width="100%"
                          height="auto"
                        />
                      </Container>
                      <Container
                        className="club-info-container"
                        fd="column"
                        verticalAlign="flex-start"
                        horizontalAlign="flex-start"
                        paddingLeft="10px"
                        paddingRight="10px"
                        width="310px"
                      >
                        <Text clubName>{club.clubName}</Text>
                        <Text clubSummary>{club.clubSummary}</Text>
                      </Container>
                    </Container>
                  </Container>
                );
              })}
            </Container>
          </Route>
          <Route path="/centralclub/religion">
            <Container
              height="40px"
              marginTop="80px"
              marginLeft="20px"
              width="1000px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                종교 분과
              </Text>
            </Container>
            <Container
              backgroundColor="white"
              borderRadius="8px"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              marginTop="30px"
              width="1000px"
              display="block"
            >
              <Container
                width="1000px"
                height="50px"
                horizontalAlign="flex-end"
              >
                <Text fontSize="21px" fontColor="grey">
                  동아리 로고를 클릭하시면 각 동아리 페이지로 이동합니다.
                </Text>
              </Container>
              {religionClub.map((club, index) => {
                return (
                  <Container
                    width="500px"
                    height="210px"
                    display="inline-block"
                    key={club.clubID}
                    className="club-container"
                    marginTop="30px"
                    visual
                  >
                    <Container className="club-contents-container">
                      <Container
                        className="club-image-container"
                        width="150px"
                        height="150px"
                      >
                        <img
                          src={club.clubLogo}
                          alt=""
                          width="100%"
                          height="auto"
                        />
                      </Container>
                      <Container
                        className="club-info-container"
                        fd="column"
                        verticalAlign="flex-start"
                        horizontalAlign="flex-start"
                        paddingLeft="10px"
                        paddingRight="10px"
                        width="310px"
                      >
                        <Text clubName>{club.clubName}</Text>
                        <Text clubSummary>{club.clubSummary}</Text>
                      </Container>
                    </Container>
                  </Container>
                );
              })}
            </Container>
          </Route>
          <Route path="/centralclub/volunteer">
            <Container
              height="40px"
              marginTop="80px"
              marginLeft="20px"
              width="1000px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                봉사 분과
              </Text>
            </Container>
            <Container
              backgroundColor="white"
              borderRadius="8px"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              marginTop="30px"
              width="1000px"
              display="block"
            >
              <Container
                width="1000px"
                height="50px"
                horizontalAlign="flex-end"
              >
                <Text fontSize="21px" fontColor="grey">
                  동아리 로고를 클릭하시면 각 동아리 페이지로 이동합니다.
                </Text>
              </Container>
              {volunteerClub.map((club) => {
                return (
                  <Container
                    width="500px"
                    height="210px"
                    display="inline-block"
                    key={club.clubID}
                    className="club-container"
                    visual
                  >
                    <Container className="club-contents-container">
                      <Container
                        className="club-image-container"
                        width="150px"
                        height="150px"
                      >
                        <img
                          src={club.clubLogo}
                          alt=""
                          width="100%"
                          height="auto"
                        />
                      </Container>
                      <Container
                        className="club-info-container"
                        fd="column"
                        verticalAlign="flex-start"
                        horizontalAlign="flex-start"
                        paddingLeft="10px"
                        paddingRight="10px"
                        width="310px"
                      >
                        <Text clubName>{club.clubName}</Text>
                        <Text clubSummary>{club.clubSummary}</Text>
                      </Container>
                    </Container>
                  </Container>
                );
              })}
            </Container>
          </Route>
        </Container>
      </Container>
    </>
  );
}

export default CentralClub;
