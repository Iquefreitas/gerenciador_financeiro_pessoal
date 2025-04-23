import * as C from './styles';
import { Item } from "../../types/Item";
import { TabletItem } from "./TableItem";


type Props = {
    list: Item[]
}

export const TableArea = ({ list }: Props) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TabletHeadColum width={100}>Data</C.TabletHeadColum>
                    <C.TabletHeadColum width={130}>Categoria</C.TabletHeadColum>
                    <C.TabletHeadColum>Título</C.TabletHeadColum>
                    <C.TabletHeadColum width={150}>Valor</C.TabletHeadColum>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <TabletItem key={index} item={item} />
                ))}

            </tbody>
        </C.Table>
    );
}