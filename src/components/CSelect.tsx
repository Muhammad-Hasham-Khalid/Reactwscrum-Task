import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Stack } from "@mui/material"
import IdentIcon from './IdentIcon';

interface CSelectProps {
    rounded: Boolean
}

const CSelect = ({ rounded }: CSelectProps) => {
    const [selected, setSelected] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setSelected(event.target.value);
    };
    return <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
            <Stack direction="row">
                <IdentIcon styles={{ width: "20px", height: "20px", marginRight: "8px" }} address={"0xBAc675C310721717C94A37F6cbeA6F081b1C2a07"} />
                Johndoe.near
            </Stack>
        </InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selected}
            label="Age"
            onChange={handleChange}
            sx={{ borderRadius: "50px" }}
        >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </FormControl>
};

export default CSelect;
