// in src/posts.js
import React from 'react';
import {
  Create,
  Datagrid,
  DisabledInput,
  Edit,
  EditButton,
  List,
  LongTextInput,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin';

const PostTitle = ({ record }) => {
   return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostList = props => (
    <List {...props}>
        <Datagrid>
          <TextField source="id" />
              <ReferenceField source="userId" reference="users">
                  {/* <TextField source="id" /> */}
                  <TextField source="name" />
              </ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List>
);

export const PostEdit = props => (
  <Edit title={<PostTitle />} {...props}>
      <SimpleForm>
           <DisabledInput source="id" />
         <ReferenceInput source="userId" reference="users">
               {/* <SelectInput optionText="id" /> */}
               <SelectInput optionText="name" />
         </ReferenceInput>
           {/* <TextInput source="id" /> */}
         <TextInput source="title" />
           {/* <TextInput source="body" /> */}
           <LongTextInput source="body" />
      </SimpleForm>
  </Edit>
);

export const PostCreate = props => (
  <Create {...props}>
      <SimpleForm>
          <ReferenceInput source="userId" reference="users">
              <SelectInput optionText="name" />
          </ReferenceInput>
          <TextInput source="title" />
          <LongTextInput source="body" />
      </SimpleForm>
  </Create>
);