package dev.sena.credikfam;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.SpringApplication;
import org.springframework.context.ConfigurableApplicationContext;

import static org.mockito.Mockito.*;

@SpringBootTest
class CredikfamApplicationTests {

	@MockBean
	private SpringApplication application;

	@Test
	void shouldRunApplication() {
		String[] args = new String[] {};
		when(application.run(CredikfamApplication.class, args)).thenReturn(mock(ConfigurableApplicationContext.class));

		CredikfamApplication.main(args);

		verify(application, times(1)).run(CredikfamApplication.class, args);
	}
}
