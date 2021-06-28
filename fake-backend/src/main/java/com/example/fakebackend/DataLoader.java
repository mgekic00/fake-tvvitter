package com.example.fakebackend;

import com.example.fakebackend.model.FollowingLink;
import com.example.fakebackend.model.Post;
import com.example.fakebackend.model.User;
import com.example.fakebackend.repo.FollowersRepo;
import com.example.fakebackend.repo.PostsRepo;
import com.example.fakebackend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;
import java.util.UUID;

@Component
public class DataLoader implements ApplicationRunner {

    public UserRepo userRepository;
    public PostsRepo postsRepo;
    public FollowersRepo followersRepo;

    @Autowired
    public DataLoader(UserRepo userRepository, PostsRepo postsRepo, FollowersRepo followersRepo) {

        this.userRepository = userRepository;
        this.postsRepo = postsRepo;
        this.followersRepo = followersRepo;

    }

    public void run(ApplicationArguments args) {
        userRepository.save(new User(UUID.randomUUID().toString()
                , "user", "123", "Dummy description. Lacks imagination.", false));
        userRepository.save(new User(UUID.randomUUID().toString()
                , "user1", "123", "Another dummy description. Still no imagination.", false));
        userRepository.save(new User(UUID.randomUUID().toString()
                , "user2", "123", "Very description. Much descriptive.", false));
        userRepository.save(new User(UUID.randomUUID().toString()
                , "user3", "123", "Dummy description. Lacks imagination.", false));
        userRepository.save(new User(UUID.randomUUID().toString()
                , "user4", "123", "Dummy description. Lacks imagination.", false));
        userRepository.save(new User(UUID.randomUUID().toString()
                , "user5", "123", "Dummy description. Lacks imagination.", false));

        //posts

        postsRepo.save(new Post(UUID.randomUUID().toString()
                , "user1", "Wooow. Today I ate this delicious pizza. Thanks to technology, everybody can know what I'm eating, so cool.",
                "https://www.klikcup.com/images/blog/Best%20pizza/pizza-naslovna.jpg", new Timestamp(System.currentTimeMillis())));

        postsRepo.save(new Post(UUID.randomUUID().toString()
                , "user1", "Ate this pasta immediately afterwards. Hehe.",
                "https://www.budgetbytes.com/wp-content/uploads/2018/04/The-Best-Weeknight-Pasta-Sauce-V5.jpg", new Timestamp(System.currentTimeMillis()+15000)));


        postsRepo.save(new Post(UUID.randomUUID().toString()
                , "user2", "There's a time and a season to come to Podstrana.",
                "https://www.croatiagems.com/wp-content/uploads/2018/02/Le-Meridien-Lav-Podstrana-Bay-Split-Riviera.-6.jpg", new Timestamp(System.currentTimeMillis()+5000)));

        //follow links

        followersRepo.save(new FollowingLink(UUID.randomUUID().toString(),"user","user1"));
        followersRepo.save(new FollowingLink(UUID.randomUUID().toString(),"user","user2"));

    }
}