import { DepartmentPageProps } from "@/@types/PagePropTypes";

export default function DepartmentPage(props: DepartmentPageProps) {
    return (<div className="min-h-screen w-screen">
        <div className="">
            {props.params.department}
        </div>
    </div>);
}