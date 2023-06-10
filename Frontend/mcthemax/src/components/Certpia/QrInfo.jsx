import styled from "styled-components";
import { DarkGray, Orange } from "../../assets/color/color";

const QrInfo = () => {
  const datas = [
    {
      number: "2018112039",
      name: "정원호",
      syear: "4",
      birthDate: "1998-08-24",
      college: "공과대학",
      department: "컴퓨터정보통신공학부",
      major: "컴퓨터공학전공",
      userState: "학생",
      phoneNum: "010-4173-5893",
    },
  ];
  return (
    <Container>
      <Title>2023학년도 1학기 성적</Title>
      <GradeContainer>
        {datas &&
          datas.map((data, index) => (
            <>
              <DataContainer>
                <Name>교과목명</Name>
                <Data>{datas[0].birthDate}</Data>
              </DataContainer>
              <DataContainer>
                <Name>담당교원</Name>
                <Data>{datas[0].number}</Data>
              </DataContainer>
              <DataContainer>
                <Name>학점</Name>
                <Data>{datas[0].college}</Data>
              </DataContainer>
              <DataContainer>
                <Name>성적</Name>
                <Data>{datas[0].phoneNum}</Data>
              </DataContainer>
            </>
          ))}
      </GradeContainer>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 10vh;
  left: 15vw;
  width: 85vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  scroll-behavior: auto;
`;

const H2 = styled.h2`
  align-self: flex-start;
  margin-left: 2.5vw;
  color: ${Orange};
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 14px;
  align-self: flex-start;
  margin-left: 2.5vw;
  margin-bottom: 1vh;
`;

const LectureContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(4, 1fr);
  border: 1px solid #e6e8e7;
  width: 80vw;
  height: 10vh;
  margin-bottom: 1vh;
`;

const GradeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  border: 1px solid #e6e8e7;
  width: 80vw;
  height: 60vh;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  border-bottom: 1px solid #e6e8e7;
  align-items: flex-start;
  justify-content: space-between;
  margin: 20px;
`;

const Name = styled.div`
  font-weight: bold;
  margin-bottom: 1vh;
  color: ${DarkGray};
  padding-top: 30px;
`;

const Data = styled.div``;

const LectureMap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Lecture = styled.button`
  margin: 10px;
  border: 1px solid #e6e8e7;
  background-color: white;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  width: 15vw;
  cursor: pointer;
  &:hover {
    background-color: ${Orange};
  }
`;

const FinalGrade = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

export default QrInfo;
