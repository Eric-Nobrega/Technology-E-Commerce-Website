import { ProductCard } from "../UI Components/ProductCard";

export const LaptopPage = () => {
  return (
    <div className="pt-2">
      <div className="flex justify-center">
        <h1 className="text-3xl underline">Laptops</h1>
      </div>
      <div className="grid grid-cols-3 gap-6 px-12 pt-6">
        <ProductCard
          title="Acer x320"
          price={300}
          description="description"
          img="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
        />
        <ProductCard
          title="Dell XPS 15"
          price={750}
          description="description"
          img="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsbCUyMHhwc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
        />
        <ProductCard
          title="MacBook Pro M1"
          price={450}
          description="description"
          img="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
        />
        <ProductCard
          title="HP L140"
          price={199}
          description="description"
          img="https://images.unsplash.com/photo-1583223667854-e0e05b1ad4f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHAlMjBsYXB0b3B8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
        />
        <ProductCard
          title="Acer LP0A"
          price={275}
          description="description"
          img="https://images.unsplash.com/photo-1522198798025-edbf00dabd6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWNlciUyMGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
        />
        <ProductCard
          title="Dell XPS 17"
          price={499}
          description="description"
          img="https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVsbCUyMHhwc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
        />
      </div>
    </div>
  );
};
