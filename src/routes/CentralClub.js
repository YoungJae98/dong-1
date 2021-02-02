import React, { useEffect, useState } from "react";
import { NavLink, Route } from "react-router-dom";

import sejong from "../assets/images/Sejonglogo.png";
import logo_inversed from "../assets/logo_reversed.png";
import clubroomlayout from "../assets/images/clubroomlayout.png";

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
        clubLogo: sejong,
        clubSummary:
          "악기 다루는 법을 더 자세히 배우고 (혹은 보컬 트레이닝), 악기와 밴드 음악에 더 관심을 가질 수 있게 하고, 버스킹, 정기공연 등을 통해 무대에 직접 참여할 수 있는 경험을 하도록 도와줌 ",
      },
      {
        clubID: 2,
        clubName: "더블랙",
        clubLogo: sejong,
        clubSummary:
          "흑인 음악을 바탕으로 하여 동아리원들 간의 음악 교류, 공연 등 음악 활동을 하며 문화 발전에 기여하기 위함",
      },
      {
        clubID: 3,
        clubName: "사운드플러스",
        clubLogo: sejong,
        clubSummary:
          "음악에 대한 열정으로 가득 찬 학생들이 모여 합주를 하며 친목을 다지는 동아리. 부원 각각의 소리가 더해져야 비로소 완전해진다는 의미의 사운드플러스. ",
      },
      {
        clubID: 4,
        clubName: "세종극회",
        clubLogo: sejong,
        clubSummary:
          "세종극회는 1979년에 설립이후로 매년 4회의 수준높은 연극 공연을 올리고 있습니다. 누구나 연기에 관심만 있다면 실력에 상관없이 무대를 경험할 수 있습니다. 인생의 기억에 남는 특별한 경험을 쌓으실 수 있습니다. 무대가 올라가는 과정을 모두 함께해보세요. ",
      },
      {
        clubID: 5,
        clubName: "소울트레인",
        clubLogo: sejong,
        clubSummary:
          "흑인음악(주로 힙합)장르의 곡 메이킹과 공연이 주된 목적입니다. ",
      },
      {
        clubID: 6,
        clubName: "인트로",
        clubLogo: sejong,
        clubSummary:
          "방송 음악 및 힙합을 주로 다루며, 춤과 음악을 사랑하고 배우며 회원들과 어울려 공연을 하는 것에 목적을 둔다. ‘힙합’이라 함은 댄스와 랩 등 음악적 요소를 다루는 것임을 밝힌다. ",
      },
      {
        clubID: 7,
        clubName: "터벌림",
        clubLogo: sejong,
        clubSummary:
          "“우리 자신의 보다 넓은 울을 찾고 우리 민족의 열을 찾으며, 우리의 알 터를 찾고 올바른 뜻을 찾는다.”풍물/사물놀이를 공연하기 위해 연습하고 다른 풍물패의 공연을 보거나 공연을 함으로써 공연 경험을 쌓으며 더 나은 공연을 기획 ",
      },
      {
        clubID: 8,
        clubName: "페이지세븐",
        clubLogo: sejong,
        clubSummary:
          "세종대학교 유일 중앙 락 동아리 PAGE7은 락음악에 관심이 있는 재학생들에게 연습과 배움, 공연을 통한 자신감 상승과 연주실력 향상, 밴드에 대한 로망을 직접 성취할 수 있는 동아리",
      },
      {
        clubID: 9,
        clubName: "한울림",
        clubLogo: sejong,
        clubSummary:
          "기타를 가르치고 배우고 연주하고 감상하면서 음악을 통해 사람들과 친목을 쌓는 동아리 ",
      },
    ]);
    setPhysicalClub([
      {
        clubID: 1,
        clubName: "RUSH",
        clubLogo: sejong,
        clubSummary:
          "농구라는 스포츠를 좋아하는 그 누구나 참여할 수 있는 모임을 위해 만들었으며 더 나가아 실력 증진과 대회 입상까지 목표로 하는 동아리 ",
      },
      {
        clubID: 2,
        clubName: "ESCAPER",
        clubLogo: sejong,
        clubSummary:
          "주짓수라는 운동을 통한 세종인의 호신과 체력증진 및 정서발달 위함 ",
      },
      {
        clubID: 3,
        clubName: "STC",
        clubLogo: sejong,
        clubSummary:
          "테니스를 통한 회원 상호간의 친선도모 및 건강한 육체와 건전한 정신 함양을 목적으로 한다. ",
      },
      {
        clubID: 4,
        clubName: "TSP",
        clubLogo: sejong,
        clubSummary:
          "세종대 학우들 간의 탁구를 치고 더 나아가 다른 학교들 간의 교류전과 전국 대회 참여 ",
      },
      {
        clubID: 5,
        clubName: "발파람",
        clubLogo: sejong,
        clubSummary:
          "우리 발파람은 전통무예인 택견을 수련 및 활성화하며 개인의 정신.신체능력 개발을 지향한다. 또 택견을 학우들에게 알리고, 보다 다양한 여가활동을 할 수 있는 기회를 마련하고자 한다. 시연 및 대회 등으로 세종대의 이름을 널리 알리는데 창립목적이 있다. ",
      },
      {
        clubID: 6,
        clubName: "산악부",
        clubLogo: sejong,
        clubSummary:
          "산악부는 등반과 등산을 통해 올바른 등반 지식을 익히고 자연을 아끼 는데 목적을 둔다. ",
      },
      {
        clubID: 7,
        clubName: "세종스키",
        clubLogo: sejong,
        clubSummary: "스키를 좋아하는 사람들이 모여 같이 스키를 즐기는 동아리",
      },
      {
        clubID: 8,
        clubName: "세종킹스",
        clubLogo: sejong,
        clubSummary:
          "야구실력 증진과 야구 외에도 다양한 활동을 통한 친목도모를 목적으로 하고 있다. ",
      },
      {
        clubID: 9,
        clubName: "요트부",
        clubLogo: sejong,
        clubSummary: "요트를 타기 위함",
      },
      {
        clubID: 10,
        clubName: "점프",
        clubLogo: sejong,
        clubSummary: "겨울에 스노우보드를 다 같이 모여서 타기 위해 만들어졌다 ",
      },
      {
        clubID: 11,
        clubName: "최강유도",
        clubLogo: sejong,
        clubSummary:
          "外柔內剛(외유내강)- 부드러움이 능히 강함을 제압한다는 유도의 정신을 바탕으로 심신을 단련하여 나 자신과, 가족과 사랑하는 사람들을 지키고 보호한다는 뜻으로 건전한 대학문화를 만드는 데 목적으로 한다. ",
      },
    ]);
    setVolunteerClub([
      {
        clubID: 1,
        clubName: "셀스",
        clubLogo: sejong,
        clubSummary:
          "SELS는 영어교육봉사동아리로 아이들에게 영어를 교육하는 봉사활동을 통해 사회적인 기여와 이를 통해 학우들의 영어실력 향상에도 도움을 주기 위해",
      },
      {
        clubID: 2,
        clubName: "죽순회",
        clubLogo: sejong,
        clubSummary: "사회봉사 및 친목도모",
      },
    ]);
    setCultureClub([
      {
        clubID: 1,
        clubName: "BAMBOO",
        clubLogo: sejong,
        clubSummary:
          "사진을 좋아하는 사람들이 자유롭고 즐거운 분위기 속에서 사진을 즐길 수 있도록 한다. ",
      },
      {
        clubID: 2,
        clubName: "두바퀴",
        clubLogo: sejong,
        clubSummary:
          "이륜차(오토바이, 스쿠터)를 좋아하는 사람들이 모여 자가 정비를 서로 배우고 안전교육을 배워 면허 취득을 돕는다. 마실 및 여행을 다니며 즐기는 모임이다.",
      },
      {
        clubID: 3,
        clubName: "마스터",
        clubLogo: sejong,
        clubSummary:
          "본래 게임 동아리로 창립되었으나 어떠한 이유로 인하여 보드게임 동아리로 변경되었음.변경된지는 꽤 된 것으로 추청되며 이유는 알지 못함. ",
      },
      {
        clubID: 4,
        clubName: "미즈",
        clubLogo: sejong,
        clubSummary:
          "수도권 지역이 아닌 곳에서 온 신입생들과 재학생들과 서울체험을 하고, 평소 가보지 못한 장소에 같이 여행을 다니기 위해 창립되었다 ",
      },
      {
        clubID: 5,
        clubName: "유스호스텔",
        clubLogo: sejong,
        clubSummary:
          "유스호스텔은 여행을 통해 우리나라의 많은 지역을 체험함으로서 견문을 넓히고 관심을 갖도록 하는데 목적을 둔다 또한 상호 교류를 통해 문화적 가치에 대한 인식을 높인다 ",
      },
      {
        clubID: 6,
        clubName: "율",
        clubLogo: sejong,
        clubSummary: "몸짓패, 민중 가요를 몸으로 표현",
      },
      {
        clubID: 7,
        clubName: "한손",
        clubLogo: sejong,
        clubSummary:
          "만화와 애니메이션을 함께 즐기며, 더 나아가 직접 창작활동을 해본다온라인 게임, 보드게임, TRPG 등 여러 분야의 게임 활동을 해본다.",
      },
    ]);
    setAcademicClub([
      {
        clubID: 1,
        clubName: "KUSA",
        clubLogo: sejong,
        clubSummary:
          "유네스코 정신을 토대로 주요 국제 사안에 대한 이해 증진 및 논의를 도모하고, 이러한 움직임이 널리 퍼지는 것을 묘사한 ‘새물결 운동’을 널리 하도록 한다. ",
      },
      {
        clubID: 2,
        clubName: "UNSA",
        clubLogo: sejong,
        clubSummary:
          "대학생들의 국제 이슈에 대한 관심도를 높이고 대학생들이 세계 평 화에 대해 생각해보게 하며 대학생들 상호간의 대화를 촉진시키고자 창립됨 ",
      },
      {
        clubID: 3,
        clubName: "별무리",
        clubLogo: sejong,
        clubSummary:
          "중앙동아리 유일 천체관측 동아리로서 천문관측을 통한 우주 삼라만상의 이치를 깨우치며 그 미학을 탐구하는 것 ",
      },
      {
        clubID: 4,
        clubName: "세종문학회",
        clubLogo: sejong,
        clubSummary:
          "단체로 오프라인 문화체험을 하고 사회적 이슈에 대해 시사토론 및 문예 창작활동을 통해 인문학적 지식과 논리력을 함양한다. ",
      },
      {
        clubID: 5,
        clubName: "세종서회",
        clubLogo: sejong,
        clubSummary:
          "개인의 취미와 특기를 살려 서예를 연마한다. 옛 조상들을 이해하고, 미래의 자아를 위해 개인의 능력을 하고,함양하며 참된 지성인으로서의 인격도야에 힘쓴다.",
      },
      {
        clubID: 6,
        clubName: "아롬",
        clubLogo: sejong,
        clubSummary:
          "본 동아리는 어플리케이션 제작 프로젝트를 진행하며 앱 기획, 개발 디자인 능력을 향상 그리고 회원 간의 친목 도모를 목적으로 한다. ",
      },
      {
        clubID: 7,
        clubName: "유마프랜",
        clubLogo: sejong,
        clubSummary: "마케팅 프로젝트 경험을 쌓음으로써, 기획 및 PT 능력 함양 ",
      },
      {
        clubID: 8,
        clubName: "인터페이스",
        clubLogo: sejong,
        clubSummary:
          "본 회는 세종대학교 동아리연합회의 제반목적 및 규악을 준수하여 컴퓨터에 대한 전반적인 지식을 습득하고 이를 활용, 극대화 하는 능력을 기르며, 회원 상호간에 긴밀한 유대관계로 친선을 도모한다. ",
      },
    ]);
    setReligionClub([
      {
        clubID: 1,
        clubName: "CAM",
        clubLogo: sejong,
        clubSummary:
          "CAM 이라는 이름은 그리스도의 대사 (Christ’s Ambassador Mission) 라는사명 공동체를 의미한다. 우리는 그리스도의 대사로서 개인과, 캠퍼스, 민족, 더 나아가 열방에 하나님 나라를 확장하는 선교 공동체이다.",
      },
      {
        clubID: 2,
        clubName: "CCC",
        clubLogo: sejong,
        clubSummary:
          "'Movements Everywhere' (어느 곳에서나 영적 운동을 일으키기)이 비전을 가지고 성령의 능력으로 사람들에게 그리스도를 전하고 믿음을 훈련시키고, 이들이 다른 사람들을 전도하고 제자화 할 수 있도록 파송하여, 지상 명령을 성취하도록 돕는다.",
      },
      {
        clubID: 3,
        clubName: "IVF",
        clubLogo: sejong,
        clubSummary:
          "복음으로 변화된 학생, 학사들이 캠퍼스 및 세상 속에서 그리스도의 철저한 제자로 살며 하나님의 주권과 통치를 드러낸다.",
      },
      {
        clubID: 4,
        clubName: "JYM",
        clubLogo: sejong,
        clubSummary:
          "JYM은 하나님의 말씀과 성령으로 이 시대의 가치관과 한계를 돌파하는 충만한 리더들을 사회 각 영역에 파송하고, 세상을 이기는 영적 용사들로 다음세대를 훈련, 무장시키어 하나님의 나라를 완성하는 것을 목적으로 모임을 이루고 있다. ",
      },
      {
        clubID: 5,
        clubName: "KSGI",
        clubLogo: sejong,
        clubSummary:
          "누구나 무한한 가능성을 지니고 있어 그것을 개화시키면 자유자재로 살아갈 수 있다고 믿으며 모든 인간의 평등과 존엄의 실현을 위해서 끊임 없는 노력과 실천을 지속하여 확고한 ‘인간주의’의 활동을 지속한다. ",
      },
      {
        clubID: 6,
        clubName: "레지나",
        clubLogo: sejong,
        clubSummary:
          "대학사회의 특수성에 맞는 방법으로 복음을 실천하고 학교 내 학생들에게 복음을 전함으로써 예수님의 구원사업에 동참하는 것이 가톨릭학생회의 기본적인 역할이다. ",
      },
    ]);
  }, []);
  return (
    <>
      <Container height="1400px" backgroundColor="">
        <Container width="200px" verticalAlign="baseline">
          <Container
            width="200px"
            height="366px"
            fd="column"
            verticalAlign="baseline"
            position="sticky"
            marginTop="100px"
          >
            <Container
              height="50px"
              horizontalAlign="left"
              verticalAlign="flex-end"
            >
              <img src={logo_inversed} alt="" width="40px" />
              <Text fontColor="#14406c" fontSize="21px" fontFamily="SeoulBold">
                중앙동아리 소개
              </Text>
            </Container>
            <Remote width="200px" paddingTop="10px" paddingBottom="10px">
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
          width="900px"
          fd="column"
          marginLeft="30px"
          verticalAlign="flex-start"
        >
          <Route exact path="/centralclub/">
            <Container
              height="40px"
              marginTop="50px"
              marginLeft="20px"
              width="840px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                동방 배치도
              </Text>
            </Container>
            <Container
              backgroundColor="white"
              border="1px solid #14406c"
              borderRadius="8px"
              fd="column"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              paddingTop="30px"
              width="840px"
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
              marginTop="50px"
              marginLeft="20px"
              width="840px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                체육 분과
              </Text>
            </Container>
            <Container
              backgroundColor="white"
              border="1px solid #14406c"
              borderRadius="8px"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              width="840px"
              display="block"
            >
              <Container width="840px" height="50px" horizontalAlign="flex-end">
                <Text fontSize="21px" fontColor="grey">
                  동아리 로고를 클릭하시면 각 동아리 페이지로 이동합니다.
                </Text>
              </Container>
              {physicalClub.map((club, index) => {
                return (
                  <Container
                    width="420px"
                    height="200px"
                    display="inline-block"
                    key={club.clubID}
                    className="club-container"
                    borderBottom={
                      index === physicalClub.length - 1
                        ? "none"
                        : "2px solid grey"
                    }
                  >
                    <Container className="club-contents-container">
                      <Container
                        className="club-image-container"
                        width="150px"
                        height="150px"
                      >
                        <img src={club.clubLogo} alt="" width="150px" />
                      </Container>
                      <Container
                        className="club-info-container"
                        fd="column"
                        verticalAlign="flex-start"
                        horizontalAlign="flex-start"
                        paddingLeft="10px"
                        paddingRight="10px"
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
              marginTop="50px"
              marginLeft="20px"
              width="840px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                문화 분과
              </Text>
            </Container>
            <Container
              backgroundColor="white"
              border="1px solid #14406c"
              borderRadius="8px"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              width="840px"
              display="block"
            >
              <Container width="840px" height="50px" horizontalAlign="flex-end">
                <Text fontSize="21px" fontColor="grey">
                  동아리 로고를 클릭하시면 각 동아리 페이지로 이동합니다.
                </Text>
              </Container>
              {cultureClub.map((club, index) => {
                return (
                  <Container
                    width="420px"
                    height="200px"
                    display="inline-block"
                    key={club.clubID}
                    className="club-container"
                    borderBottom={
                      index === cultureClub.length - 1
                        ? "none"
                        : "2px solid grey"
                    }
                  >
                    <Container className="club-contents-container">
                      <Container
                        className="club-image-container"
                        width="150px"
                        height="150px"
                      >
                        <img src={club.clubLogo} alt="" width="150px" />
                      </Container>
                      <Container
                        className="club-info-container"
                        fd="column"
                        verticalAlign="flex-start"
                        horizontalAlign="flex-start"
                        paddingLeft="10px"
                        paddingRight="10px"
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
              marginTop="50px"
              marginLeft="20px"
              width="840px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                공연 분과
              </Text>
            </Container>
            <Container
              backgroundColor="white"
              border="1px solid #14406c"
              borderRadius="8px"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              width="840px"
              display="block"
            >
              <Container width="840px" height="50px" horizontalAlign="flex-end">
                <Text fontSize="21px" fontColor="grey">
                  동아리 로고를 클릭하시면 각 동아리 페이지로 이동합니다.
                </Text>
              </Container>
              {showClub.map((club, index) => {
                return (
                  <Container
                    width="420px"
                    height="210px"
                    display="inline-block"
                    key={club.clubID}
                    className="club-container"
                    borderBottom={
                      index === showClub.length - 1 ? "none" : "2px solid grey"
                    }
                  >
                    <Container className="club-contents-container">
                      <Container
                        className="club-image-container"
                        width="150px"
                        height="150px"
                      >
                        <img src={club.clubLogo} alt="" width="150px" />
                      </Container>
                      <Container
                        className="club-info-container"
                        fd="column"
                        verticalAlign="flex-start"
                        horizontalAlign="flex-start"
                        paddingLeft="10px"
                        paddingRight="10px"
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
              marginTop="50px"
              marginLeft="20px"
              width="840px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                학술 분과
              </Text>
            </Container>
            <Container
              backgroundColor="white"
              border="1px solid #14406c"
              borderRadius="8px"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              width="840px"
              display="block"
            >
              <Container width="840px" height="50px" horizontalAlign="flex-end">
                <Text fontSize="21px" fontColor="grey">
                  동아리 로고를 클릭하시면 각 동아리 페이지로 이동합니다.
                </Text>
              </Container>
              {academicClub.map((club, index) => {
                return (
                  <Container
                    width="420px"
                    height="200px"
                    display="inline-block"
                    key={club.clubID}
                    className="club-container"
                    borderBottom="2px solid grey"
                  >
                    <Container className="club-contents-container">
                      <Container
                        className="club-image-container"
                        width="150px"
                        height="150px"
                      >
                        <img src={club.clubLogo} alt="" width="150px" />
                      </Container>
                      <Container
                        className="club-info-container"
                        fd="column"
                        verticalAlign="flex-start"
                        horizontalAlign="flex-start"
                        paddingLeft="10px"
                        paddingRight="10px"
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
              marginTop="50px"
              marginLeft="20px"
              width="840px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                종교 분과
              </Text>
            </Container>
            <Container
              backgroundColor="white"
              border="1px solid #14406c"
              borderRadius="8px"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              width="840px"
              display="block"
            >
              <Container width="840px" height="50px" horizontalAlign="flex-end">
                <Text fontSize="21px" fontColor="grey">
                  동아리 로고를 클릭하시면 각 동아리 페이지로 이동합니다.
                </Text>
              </Container>
              {religionClub.map((club, index) => {
                return (
                  <Container
                    width="420px"
                    height="200px"
                    display="inline-block"
                    key={club.clubID}
                    className="club-container"
                    borderBottom={"2px solid grey"}
                  >
                    <Container className="club-contents-container">
                      <Container
                        className="club-image-container"
                        width="150px"
                        height="150px"
                      >
                        <img src={club.clubLogo} alt="" width="150px" />
                      </Container>
                      <Container
                        className="club-info-container"
                        fd="column"
                        verticalAlign="flex-start"
                        horizontalAlign="flex-start"
                        paddingLeft="10px"
                        paddingRight="10px"
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
              marginTop="50px"
              marginLeft="20px"
              width="840px"
              horizontalAlign="left"
            >
              <Text fontColor="#14406c" fontSize="32px">
                봉사 분과
              </Text>
            </Container>
            <Container
              backgroundColor="white"
              border="1px solid #14406c"
              borderRadius="8px"
              horizontalAlign="left"
              verticalAlign="flex-start"
              paddingLeft="30px"
              paddingRight="30px"
              width="840px"
              display="block"
            >
              <Container width="840px" height="50px" horizontalAlign="flex-end">
                <Text fontSize="21px" fontColor="grey">
                  동아리 로고를 클릭하시면 각 동아리 페이지로 이동합니다.
                </Text>
              </Container>
              {volunteerClub.map((club) => {
                return (
                  <Container
                    width="420px"
                    height="200px"
                    display="inline-block"
                    key={club.clubID}
                    className="club-container"
                    borderBottom="2px solid grey"
                  >
                    <Container className="club-contents-container">
                      <Container
                        className="club-image-container"
                        width="150px"
                        height="150px"
                      >
                        <img src={club.clubLogo} alt="" width="150px" />
                      </Container>
                      <Container
                        className="club-info-container"
                        fd="column"
                        verticalAlign="flex-start"
                        horizontalAlign="flex-start"
                        paddingLeft="10px"
                        paddingRight="10px"
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
