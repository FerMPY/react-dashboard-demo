import MasterCardDarkIcon from "@icons/masterCardDark.svg?react";
import MasterCardLightIcon from "@icons/masterCardLight.svg?react";

import { cn } from "@/lib/utils";

export function CreditCard({
  variant = "dark",
  balance,
  cardHolder,
  validThru,
  cardNumber,
}: {
  variant?: "light" | "dark";
  balance?: string;
  cardHolder?: string;
  validThru?: string;
  cardNumber?: string;
}) {
  const QRDarkIcon = new URL("../assets/card-qr-dark.png", import.meta.url)
    .href;
  const QRLightIcon = new URL("../assets/card-qr-light.png", import.meta.url)
    .href;

  return (
    <div
      className={cn(
        "flex h-56 w-96 flex-col overflow-hidden rounded-3xl",
        variant === "dark" ? "" : "border-2",
      )}
    >
      <div
        className={cn(
          "relative h-full",
          variant === "dark" ? "bg-black" : "bg-white",
        )}
      >
        <span
          className={cn(
            "absolute left-8 top-8 text-xs",
            variant === "dark" ? "text-white" : "text-slate-500",
          )}
        >
          Balance
        </span>
        <span
          className={cn(
            "absolute left-8 top-12 text-xl font-semibold",
            variant === "dark" ? "text-white" : "text-slate-800",
          )}
        >
          Balance
        </span>
        <span
          className={cn(
            "absolute bottom-10 left-8 text-xs",
            variant === "dark" ? "text-white opacity-70" : "text-slate-500",
          )}
        >
          CARD HOLDER
        </span>
        <span
          className={cn(
            "absolute bottom-6 left-8 text-xs font-semibold",
            variant === "dark" ? "text-white" : "text-slate-800",
          )}
        >
          CARD HOLDER
        </span>
        <span
          className={cn(
            "absolute bottom-10 right-20 text-xs",
            variant === "dark" ? "text-white opacity-70" : "text-slate-500",
          )}
        >
          VALID THRU
        </span>
        <span
          className={cn(
            "absolute bottom-6 right-20 text-xs",
            variant === "dark" ? "text-white" : "text-slate-800",
          )}
        >
          VALID THRU
        </span>
        <img
          className="absolute right-6 top-6 size-10"
          src={variant === "dark" ? QRLightIcon : QRDarkIcon}
        ></img>
      </div>
      <div
        className={cn(
          "relative h-24 bg-gray-500",
          variant === "dark" ? "bg-gray-500" : "border-t-2 bg-white",
        )}
      >
        {variant === "dark" ? (
          <MasterCardDarkIcon className="absolute right-4 top-4 h-8 w-12" />
        ) : (
          <MasterCardLightIcon className="absolute right-4 top-4 h-8 w-12" />
        )}
        <span
          className={cn(
            "absolute left-6 top-4 text-2xl font-semibold",
            variant === "dark" ? "text-white" : "text-slate-800",
          )}
        >
          Balance
        </span>
      </div>
    </div>
  );
}
