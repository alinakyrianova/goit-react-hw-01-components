import {
  TableContainer,
    TableHead,
  /*TableHeader,*/
  TableRow ,
  TableBody,
  TableData,
} from './TransactionHistory.styled.js';





export const TransactionElement = ({ id, type, amount, currency }) => (
    <tr key={id} >
        <TableData>{type}</TableData>
        <TableData>{amount}</TableData>
        <TableData>{currency}</TableData>
    </tr>
    
);

export const TransactionHistory = ({ items }) => (
 
    <TableContainer>
        
        <TableHead>
            <TableRow>
                <TableData>Type</TableData>
                <TableData>Amount</TableData>
                <TableData>Currency</TableData>
            </TableRow>
        </TableHead>
            <TableBody>{items.map(TransactionElement)}</TableBody>
           
    </TableContainer>
    );


    