// in src/posts.js
import React from 'react';
import {
  Create,
  Datagrid,
  DisabledInput,
  Edit,
  EditButton,
  Filter,
  List,
  LongTextInput,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
  SimpleList,
  Responsive,
} from 'react-admin';

const PostTitle = ({ record }) => {
   return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostList = props => (
    <List filters={<PostFilter />} {...props}>
      <Responsive
            small={
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <ReferenceField label="User" source="userId" reference="users">
                        <TextField source="name" />
                    </ReferenceField>
                    <TextField source="title" />
                    <TextField source="body" />
                    <EditButton />
                </Datagrid>
            }
        />
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

const PostFilter = (props) => (
  <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
      <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
          <SelectInput optionText="name" />
      </ReferenceInput>
  </Filter>
);