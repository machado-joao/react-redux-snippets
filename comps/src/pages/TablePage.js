import SortableTable from "../components/SortableTable";
import Table from "../components/Table";

function TablePage() {
  const data = [
    { name: "Apple", color: "bg-red-500", score: 2 },
    { name: "Banana", color: "bg-yellow-300", score: 1 },
    { name: "Orange", color: "bg-orange-500", score: 4 },
    { name: "Lime", color: "bg-green-400", score: 3 },
  ];

  const config = [
    {
      label: "Fruit",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <Table data={data} config={config} keyFn={keyFn} />
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
