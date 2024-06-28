export default function PersonalHearingProceedingsField(props: any) {
    return (
        <div className="col-12">
            <div className="form-floating">
                <textarea className="form-control" id="personal_hearing_proceedings" name="personal_hearing_proceedings" style={{"height": "150px"}} defaultValue={props.value} onChange={props.onChange}></textarea>
                <label htmlFor="personal_hearing_proceedings">Personal Hearing Proceedings</label>
            </div>
        </div>
    )
}

