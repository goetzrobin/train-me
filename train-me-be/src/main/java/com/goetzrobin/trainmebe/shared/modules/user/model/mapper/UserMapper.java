package com.goetzrobin.trainmebe.shared.modules.user.model.mapper;

import com.goetzrobin.trainmebe.shared.modules.user.model.dto.UserGetDTO;
import com.goetzrobin.trainmebe.shared.modules.user.model.entity.User;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserGetDTO userToUserGetDto(User user);
    List<UserGetDTO> userListToUserGetDtoList(List<User> user);
}