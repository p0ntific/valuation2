import { IRegion, useRegionContext } from "@/lib/region/context";
import { Select } from "@/ui-kit/Select";

const options: { value: IRegion; content: string }[] = [
    { value: "Москва", content: "Москва" },
    { value: "Санкт-Петербург", content: "Санкт-Петербург" },
];

export const RegionController = () => {
    const { region, onChange } = useRegionContext();

    return <Select options={options} value={region} onChange={onChange} />;
};
