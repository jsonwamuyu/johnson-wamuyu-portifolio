import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const NoteSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  content: yup.string().required("Content is required"),
});

const notesData = [
  {
    id: 1,
    title: "first note",
    content: "This is the content of the first note from NoteApp.",
  },
  {
    id: 2,
    title: "second note",
    content: "This is the content of the second note from NoteApp.",
  },
  {
    id: 3,
    title: "third note",
    content: "This is the content of the third note from NoteApp.",
  },
];

const NoteApp = () => {
  //   const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(NoteSchema),
  });

  interface NotesDataInterface {
    title: string;
    content: string;
  }

  const onSubmit = (data: NotesDataInterface) => {
    console.log(data);
  };

  return (
    <div className="wrapper">
      <div className="container flex-col">
        <div className="mb-8 text-center">
          <h3 className="text-6xl font-bold mb-2">
            NOTE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600 ">
              APP
            </span>
          </h3>
          <p className="text-gray-400">Add your notes today</p>
        </div>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full mb-16"
        >
          <h5 className="text-3xl font-semibold">Add a Note</h5>
          <div className="flex flex-col">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Title"
              {...register("title")}
              className="px-4 py-2 border-[1px] border-gray-500 rounded outline-none"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title?.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="content">Content</label>
            <textarea
              rows={3}
              className="border-gray-500 border-[1px] px-4 py-3 rounded outline-none"
              placeholder="Content"
              {...register("content")}
            ></textarea>
            {errors.content && (
              <p className="text-red-500 text-sm">{errors.content?.message}</p>
            )}
          </div>
          <div>
            <button
              disabled={isSubmitting}
              className="px-8 py-3 disabled:bg-gray-500 disabled:cursor-not-allowed bg-indigo-600 cursor-pointer font-medium rounded-full text-white hover:bg-indigo-700 hover:scale-105 transition-transform duration-150 ease-in-out"
            >
              {isSubmitting ? "Adding..." : "Add a Note"}
            </button>
          </div>
        </form>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {notesData.map((note) => (
            <div key={note.id}>
              <h5 className="text-xl font-semibold">{note.title}</h5>
              <p className="">{note.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoteApp;

function addNumbers(num: number, num2: number): number {
  const results = num + num2;
  return results;
}

addNumbers(2, 2);
// addNumbers(2, "This is a string"); // An error -> Second parameter must be a number
addNumbers(22, 22);

function totalPrice(price: number, quantity: number, discount: number) {
  const amount = price * quantity * (1 - discount);
  return amount
}

totalPrice(100, 2, 2);

function userSystemPrompts(system:string, user){
  return `${system}/n${user}`
}

userSystemPrompts('ifconfig', 'system-out')
userSystemPrompts("ifconfig", 23);