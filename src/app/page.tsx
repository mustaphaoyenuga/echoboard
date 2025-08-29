import AddNewItem from "@/components/AddNewItem";
import Card from "@/components/Card";
import Column from "@/components/Column";

export default function Home() {
  return (
    <div className='bg-teal-900 min-h-screen h-full w-full flex items-start space-x-5 p-5'>
      <Column title='To do'>
        <Card text="This is a card" />
        <Card text="This is a card" />
      </Column>
      <Column title='In Progress'>
        <Card text="This is another card" />
      </Column>
      <Column title='Done'>
        <Card text="We are done now" />
      </Column>
      <AddNewItem toggleButtonText=" + Add another list" />
    </div>
  );
}
