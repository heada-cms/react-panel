import React from 'react';
import {Link} from "react-router-dom";
import Card from "../../atoms/card/Card";
import {routes} from "../../../app/router/routes";

const ExerciseCard = ({to, data}) => {
    return (
        <Link to={to || routes.tab}>
            <Card>
                <div className={'flex flex-row space-x-4'}>
                    <img className={'h-32 rounded'} src={data?.image?.url} alt={data?.image?.alt}/>
                    <div className={'space-y-2'}>
                        <p className={'font-bold'}>{data?.name}</p>
                        <p className={'text-sm text-gray-y-700'}>Typ: {data?.type}</p>
                        <div className={'flex flex-row space-x-1'}>
                            <p className={'text-sm text-gray-y-700'}>Partie:</p>
                            {
                                data?.muscles?.map((muscle, id) => <p className={'text-sm text-gray-y-700'} key={'msc'+id}>{`${muscle}${data?.muscles?.length === id+1 ? '' : ','}`}</p>)
                            }
                        </div>
                    </div>
                </div>
            </Card>
        </Link>
    );
};

export default ExerciseCard;
