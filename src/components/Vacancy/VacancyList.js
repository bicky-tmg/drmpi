import VacancyItem from "./VacancyItem";

const VacancyList = (props) => {
  return props.vacancies.map((vacancy) => (
    <VacancyItem
      key={vacancy.id}
      id={vacancy.id}
      post={vacancy.post}
      advertNum={vacancy.advertiseNo}
      deadline={vacancy.deadLine}
    />
  ));
};

export default VacancyList;
