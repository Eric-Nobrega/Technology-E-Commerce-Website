import { CategoryCard } from "../UI Components/CategoryCard";

export const HomepageHome = () => {
  return (
    <div className="flex justify-center px-4 pt-4 pb-12">
      <div className="grid grid-cols-3 gap-y-5 gap-x-3">
        <div>
          <CategoryCard
            title="Laptops"
            description="Portable Laptops, Notebooks, Chromebooks"
            imageSrc="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80"
          />
        </div>
        <div>
          <CategoryCard
            title="Desktops"
            description="Extremley Fast & Powerful Workstations "
            imageSrc="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80"
          />
        </div>
        <div>
          <CategoryCard
            title="Accessories"
            description="Upgrade your existing devices"
            imageSrc="https://images.unsplash.com/photo-1567094764148-bb14c3e6f14c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          />
        </div>
        <div>
          <CategoryCard
            title="Televisions"
            description="Crystal Clear Video"
            imageSrc="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          />
        </div>
        <div>
          <CategoryCard
            title="Content Creation"
            description="Provide The Best Quality For Your Audience"
            imageSrc="https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80"
          />
        </div>
        <div>
          <CategoryCard
            title="Gaming Gear"
            description="Dominate The Competition"
            imageSrc="https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          />
        </div>
      </div>
    </div>
  );
};
