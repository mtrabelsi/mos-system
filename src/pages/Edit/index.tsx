import React, { ChangeEvent, useState } from 'react';
import Layout from '../../components/Layout';
import InputText from '../../components/InputText';
import { getDataById, updateData } from '../../api';
import { IncidentType } from '../../api/types'
import { Label, LabelText } from '../../components/InputText/atoms';
import Button from '../../components/Button';
import { ControlButtons } from '../../components/Button/atoms';
import { getPropByPath, generateFormData } from './helper';

const EditItem: React.FC<any> =  (props) => {
        const { incidentId } = props.match.params;
        const { history } = props;
        const item: IncidentType = getDataById(incidentId);
        const [toEditItem, setItemToEdit] = useState<IncidentType>(item);

        const handleChange = (event: React.ChangeEvent<HTMLInputElement> | any) => {
            const { name, value } = event.target
            const copyOfOldItem = Object.assign({}, toEditItem)
            switch (name) {
                case 'status.criticality': 
                    copyOfOldItem.status.criticality = value;
                    break;
                case 'status.verified':
                    copyOfOldItem.status.verified = parseInt(value) ? true : false;
                    break;
                case 'position.from.latitude':
                    copyOfOldItem.position.from.latitude = value;
                    break;
                case 'position.from.longitude':
                    copyOfOldItem.position.from.longitude = value;
                    break;
                case 'position.to.latitude':
                    copyOfOldItem.position.to.latitude = value;
                    break;
                case 'position.to.longitude':
                    copyOfOldItem.position.to.longitude = value;
                    break;
                case 'interval.startTime':
                    copyOfOldItem.interval.startTime = value;
                    break;
                case 'interval.endTime':
                    copyOfOldItem.interval.endTime = value;
                    break;
                case 'interval.entryTime':
                    copyOfOldItem.interval.entryTime = value;
                    break;
                default:
                    copyOfOldItem[name] = value;
            }
            setItemToEdit(copyOfOldItem)
        }

        const handleSubmit = () => {
            const updateStatus = updateData(toEditItem);
            if(updateStatus){
                history.push('/');
            }
        }
        const formData = generateFormData()
        return (
            <Layout 
                showBackButton 
                history={history}
                title="Edit Incident"
                topBarStyle={{ 
                    alignItems: 'center'
                }}
            >
                <Label>
                    <LabelText>status verified:</LabelText>
                    <select 
                        value={toEditItem.status.verified ? 1 : 0} 
                        name="status.verified" 
                        onChange={handleChange}
                    >
                        <option value={1}>Yes</option>
                        <option value={0}>No</option>
                    </select>
                </Label>

                {formData.map(fd => (<Label>
                    <LabelText>{fd.label}</LabelText>
                    <InputText
                        name={fd.name}
                        type={fd.type}
                        value={getPropByPath(toEditItem, fd.name)}
                        onChange={handleChange} 
                    />
                </Label>))}

                <ControlButtons>
                    <Button
                        customMargin="5px 0"
                        customWidth="280px"
                        successMode
                        hasIconLeft={false}
                        onClick={handleSubmit}
                        value="Submit" 
                    />
                    <Button
                        customMargin="5px 0"
                        customWidth="280px"
                        isDanger
                        hasIconLeft={false}
                        onClick={e => alert('please reset the sate')}
                        value="Reset" 
                    />
                </ControlButtons>
            </Layout>
        );
}

export default EditItem;