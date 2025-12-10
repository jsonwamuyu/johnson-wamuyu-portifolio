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
  return amount;
}

totalPrice(100, 2, 2);

function userSystemPrompts(system: string, user: string) {
  return `${system}/n${user}`;
}

userSystemPrompts("ifconfig", "system-out");
userSystemPrompts("ifconfig", "23");

// void is used with function that does not return anything
// In Javascript when a function has no return type, it returns a undefined,
//  but Typescript uses void to indicate that nothing is returned
function returnVoid(): void {
  console.log("This return void");
  // return "Hello";
}

returnVoid();

function isAuthenticated(role: string) {
  if (role === "Admin") {
    return "Admin";
  } else if (role === "User") {
    return "User";
  }
  return "Guest";
}

console.log(isAuthenticated("Guest"));
console.log(isAuthenticated("Admin"));
console.log(isAuthenticated("User"));

// Union Type
let userId: string | number;

userId = 77;
console.log(`first userid: ${userId}`);

userId = "45kkhkAk34";
console.log("Second userid", userId);

function getTicket(id: string | number) {
  return id;
}

console.log(getTicket(32222222));
console.log(getTicket("Jk-4544545VJ"));

// Type narrowing
function squareNum(num: string | number) {
  if (typeof num === "string") {
    num = parseInt(num, 10);
  }
  return num * num;
}

console.log(squareNum(10));
console.log(squareNum("10"));
console.log(squareNum("Ten"));

function getTicketInfo(ticketId: string | number) {
  if (typeof ticketId === "string") {
    ticketId = parseInt(ticketId, 10);
  }
  return `Processing ticket ${ticketId}`;
}

console.log(getTicketInfo("SUPPORT-232-232-56"));
console.log(getTicketInfo(2323223));

// Optional parameters - use ? after the parameter you want to be optional
function greetPerson(name: string, title?: string) {
  if (title) {
    return `Hello ${title} ${name}`;
  }
  return `Hello ${name}`;
}

console.log(greetPerson("John"));
console.log(greetPerson("John", "Doctor"));

const welcomeUser = (name: string, email?: string) => {
  if (email) {
    return `Welcome ${name}, your email is ${email}`;
  }
  return `welcome ${name}`;
};

console.log(welcomeUser("Jane"));
console.log(welcomeUser("Jane", "jane@gmail.com"));

const calculateApiCost = (numReqs: number, tier?: string) => {
  if (tier === "pro") {
    return 0.05 * numReqs;
  } else if (tier === "enterprice") {
    return 0.03 * numReqs;
  }
  return numReqs * 0.1;
};

console.log(calculateApiCost(20, "pro"));
console.log(calculateApiCost(20, "enterprice"));

// Default parameters
// They provide a fallback value for optional arguments - When you use default parameters, theres no need to mark it with ? . the parmeter type will be infered automatically

const newMovie = (
  heading: string,
  director: string,
  actor: string,
  ratings: number = 1
) => {
  return `${heading} Stering:${actor}, director: ${director}, ratings: ${ratings}`;
};

console.log(newMovie("Prison Break", "Michael Scottfield", "David Griffin"));
console.log(newMovie("Prison Break", "Michael Scottfield", "David Griffin", 4));

const estimateResponseTime = (promptLength = 100, modelType = "text") => {
  // Calculate the response time based on modelType(Text, Image, Code)
  if (modelType === "text") {
    return 2 + 0.01 * promptLength;
  }
  if (modelType === "image") {
    return 5 + 0.02 * promptLength;
  }
  if (modelType === "code") {
    return 3 + 0.05 * promptLength;
  }
  return 0;
};

console.log(estimateResponseTime(10));

// Type union
type Priority = "low" | "medium" | "high" | "critical";
const setPriority = (priority:Priority){
  if(priority === 'low'){
    return 0
  }
  if(priority === 'medium'){
    return 1
  }
  if(priority === 'high'){
    return 2
  }
  if(priority === 'critical'){
    return 3
  }
}

console.log(setPriority("medium"))
console.log(setPriority("high"))