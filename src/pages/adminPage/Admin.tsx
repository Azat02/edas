import { Container } from "../../components/navBar/styles";
import {
  ButtonWrapper,
  CalendarWrapper,
  Times,
  TimesWrapper,
  Wrapper,
} from "./styles";
import { useState, useEffect } from "react";
import Spreadsheet, { CellBase, Matrix } from "react-spreadsheet";
import MyButton from "../../components/Common/MyButton";
import styled from "styled-components";

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getWeekDay(date: Date) {
  let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  return days[date.getDay()];
}

let date = new Date(2014, 0, 3); // 3 января 2014 года

const currentDate = new Date();
const currentMonth = currentDate.getMonth(); // Получение номера текущего месяца (январь - 0, февраль - 1, ..., декабрь - 11)
const currentYear = currentDate.getFullYear();
const daysInMonth = getDaysInMonth(currentYear, currentMonth);

const rowLabels = [
  "9:00",
  "9:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
];

interface User {
  name: string;
  tel: string;
}

interface UserTableProps {
  patientData: User[];
}

const TableContainer = styled.div`
  margin-top: 20px;
  min-height: 550px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 50%;
  margin-top: 40px;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #f2f2f2;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Tr = styled.tr<{ isEven: boolean }>`
  background-color: ${(props) => (props.isEven ? "#f2f2f2" : "initial")};

  &:hover {
    background-color: #ddd;
  }
`;

const patientData = [
  {
    name: "Ergeshbaev Azat",
    tel: "0999875300",
  },
  {
    name: "Karagulov Erlan",
    tel: "0500737080",
  },
  {
    name: "Ergeshbaev Azat",
    tel: "0999875300",
  },
  {
    name: "Karagulov Erlan",
    tel: "0500737080",
  },
  {
    name: "Ergeshbaev Azat",
    tel: "0999875300",
  },
  {
    name: "Karagulov Erlan",
    tel: "0500737080",
  },
  {
    name: "Ergeshbaev Azat",
    tel: "0999875300",
  },
  {
    name: "Karagulov Erlan",
    tel: "0500737080",
  },
];

let columnLabels: string[] = [];

for (let i = 1; i < daysInMonth; i++) {
  columnLabels.push(
    `${getWeekDay(new Date(currentYear, currentMonth + 2, i))} ${i}`
  );
}

const numRows = rowLabels.length;
const numCols = columnLabels.length;
const initialData: Matrix<CellBase<any>> = Array.from({ length: numRows }, () =>
  Array.from({ length: numCols }, () => ({ value: "" }))
);

function Admin(): JSX.Element {
  const [data, setData] = useState<Matrix<CellBase<any>>>(initialData);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const [isTable, setTable] = useState(false);

  return (
    <Wrapper>
      <Container>
        <ButtonWrapper>
          <MyButton onClick={() => setTable(true)}>
            {" "}
            Пациенттердин тизмеси{" "}
          </MyButton>
          <MyButton onClick={() => setTable(false)}>
            {" "}
            Кабыл алууга жазылгандардын тизмеси{" "}
          </MyButton>
        </ButtonWrapper>
        {isTable ? (
          <div
            style={{
              overflowY: "scroll",
            }}
          >
            <Spreadsheet
              data={data}
              onChange={(v) => {
                if (JSON.stringify(v) === JSON.stringify(data)) return;
                setData(v);
              }}
              rowLabels={rowLabels}
              columnLabels={columnLabels}
            />
          </div>
        ) : (
          <TableContainer>
            <h1>Кабыл алууга жазылгандардын тизмеси</h1>
            <Table>
              <thead>
                <tr>
                  <Th>ФИО</Th>
                  <Th>Телефон номер</Th>
                </tr>
              </thead>
              <tbody>
                {patientData.map((user, index) => (
                  <Tr key={index} isEven={index % 2 === 0}>
                    <Td>{user.name}</Td>
                    <Td>{user.tel}</Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </Wrapper>
  );
}

export default Admin;
