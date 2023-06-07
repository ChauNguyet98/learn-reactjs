import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/form-control/input-field';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
// import InputField from '../../../../components/form-control/input-field';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup
    .object({
      title: yup
        .string()
        .required('Title is required!')
        .min(5, 'Title is too short!'),
    })
    .required();

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  //   const { register, control, handleSubmit } = useForm({
  //     defaultValues: {
  //       title: '',
  //     },
  //   });

  const handleSubmitForm = (formValue) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(formValue);
    }

    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmitForm)}>
      <h4>Todo Form</h4>
      <InputField name="title" label="title" form={form} />
    </form>
  );
}

export default TodoForm;
