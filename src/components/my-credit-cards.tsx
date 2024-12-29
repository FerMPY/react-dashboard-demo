import { CreditCard } from "./credit-card";

export function MyCreditCards() {
  return (
    <div className="flex flex-col gap-2">
      <h1>My Cards</h1>
      <div className="flex gap-2">
        <CreditCard variant="dark" />
        <CreditCard variant="light" />
      </div>
    </div>
  );
}
