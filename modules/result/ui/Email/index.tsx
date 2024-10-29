import { Button } from "@/ui-kit/Button";
import { Input } from "@/ui-kit/Input";
import { Text } from "@/ui-kit/Text";
import classNames from "classnames";
import { memo, useState } from "react";

const Email = () => {
    const [expanded, setExpanded] = useState(false);
    const [email, setEmail] = useState("");
    return (
        <div className="fixed right-4 bottom-20 flex gap-4 items-end ">
            <div
                className={classNames(
                    "bg-white flex flex-col z-10 absolute bottom-0 transition-all gap-4 rounded-xl p-4 py-4 px-4 w-[400px] shadow-md",
                    {
                        "right-full opacity-0 pointer-events-none -z-10":
                            !expanded,
                        "right-14 opacity-100": expanded,
                    },
                )}
            >
                <Text variant="header-1">Подпишитесь на рассылку</Text>
                <Text variant="body-2">
                    Узнавайте, как меняется цена на квартиру по мнению нейросети
                    каждый месяц!
                </Text>
                <Input
                    value={email}
                    onChange={setEmail}
                    className="mt-2"
                    placeholder="email@yandex.ru"
                />
                <Button
                    view="flat-info"
                    isSquare
                    onClick={() => setExpanded(false)}
                >
                    Подписаться
                </Button>
            </div>
            <div
                onClick={() => setExpanded((prev) => !prev)}
                className="rounded-xl size-12 z-20 hover:bg-gray-50 transition cursor-pointer bg-white shadow-md flex items-center justify-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={classNames("size-4 transition", {
                        "rotate-180": expanded,
                    })}
                >
                    <path
                        fillRule="evenodd"
                        d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        </div>
    );
};

const MemoizedEmail = memo(Email);
export { MemoizedEmail as Email };
