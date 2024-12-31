import { useQuery } from "@tanstack/react-query";

import { useAuth } from "@/hooks/use-auth";
import { creditCardsOptions } from "@/queries/getUser";

import { CreditCard } from "./credit-card";

export function MyCreditCards() {
  const { user } = useAuth();
  const { data } = useQuery(creditCardsOptions(user.id));
  console.log(data);
  return (
    <div className="flex flex-col gap-2">
      <h1>My Cards</h1>
      <div className="flex gap-2">
        {data?.map((card, i) => (
          <CreditCard
            key={card.cardNumber}
            variant={i % 2 === 0 ? "dark" : "light"}
            balance={card.balance}
            cardHolder={card.cardHolder}
            cardNumber={card.cardNumber}
            validThru={card.expiryDate}
          />
        ))}
      </div>
    </div>
  );
}
